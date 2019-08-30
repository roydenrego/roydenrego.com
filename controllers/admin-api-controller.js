const { BUCKET_NAME } = require('../config');
const Util = require('../util');

const Project = require('../models/content');
const Contact = require('../models/contact');

const { google } = require('googleapis');
const scopes = 'https://www.googleapis.com/auth/analytics.readonly';
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes);

const view_id = '185414323';

//Analytics API handlers
module.exports.analytics_short_stats = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    async function getData() {
        const response = await jwt.authorize()
        const result = await google.analytics('v3').data.ga.get({
            'auth': jwt,
            'ids': 'ga:' + view_id,
            'start-date': `${data.days}daysAgo`,
            'end-date': 'today',
            'metrics': 'ga:pageviews,ga:users,ga:newUsers,ga:sessions',
            'dimensions': 'ga:date'
        })

        res.json(result.data);
    }

    getData();
};

module.exports.analytics_user_stats = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    async function getData() {
        const response = await jwt.authorize()
        const result = await google.analytics('v3').data.ga.get({
            'auth': jwt,
            'ids': 'ga:' + view_id,
            'start-date': `150daysAgo`,
            'end-date': 'today',
            'metrics': 'ga:users',
            'dimensions': 'ga:date'
        })

        res.json(result.data);
    }

    getData();
};

module.exports.analytics_extra_stats = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    async function getData() {
        const response = await jwt.authorize()
        const result = await google.analytics('v3').data.ga.get({
            'auth': jwt,
            'ids': 'ga:' + view_id,
            'start-date': `30daysAgo`,
            'end-date': 'today',
            'metrics': 'ga:users',
            'dimensions': data.dimension
        })

        res.json(result.data);
    }

    getData();
};

module.exports.media_list = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    const s3 = req.app.get('s3');

    var params = {
        Bucket: BUCKET_NAME,
        Delimiter: '/',
        Prefix: 'content/'
    }
    s3.listObjects(params, function (err, data) {
        if (err) throw err;

        var objects = [];

        for (var k in data.Contents) {
            if (data.Contents[k].Key == 'content/')
                continue;
            objects.push({ image: `https://s3-ap-southeast-1.amazonaws.com/${BUCKET_NAME}/${data.Contents[k].Key}` });
        }
        res.json(objects);
    });
};

module.exports.media_upload = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var fileName = Util.randomString(20) + '.' + Util.get_ext(req.file.originalname);

    const params = {
        Bucket: BUCKET_NAME, // pass your bucket name
        Key: `content/${fileName}`, // file will be saved as testBucket/contacts.csv
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        ACL: 'public-read'
    };

    const s3 = req.app.get('s3');

    s3.upload(params, function (s3Err, data) {
        if (s3Err) {
            console.log(s3Err);
            throw s3Err
        }
        console.log(`File uploaded successfully at ${data.Location}`);
        res.json({ uploaded: 1, fileName: fileName, url: data.Location });
    });
};

module.exports.project_delete = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    Project.deleteOne({ _id: data.id }, function (err) {
        if (err) {
            res.json({ statuscode: 120, status: "There an error in deleting the project" });
            return;
        }
        res.json({ statuscode: 200, status: "Successfully deleted the project" });
    });
};



module.exports.message_delete = (req, res) => {
    if (Util.api_auth(req, res)) {
        return;
    }

    var data = req.body;

    Contact.deleteOne({ _id: data.id }, function (err) {
        if (err) {
            res.json({ statuscode: 120, status: "There an error in deleting the message" });
            return;
        }
        res.json({ statuscode: 200, status: "Successfully deleted the message" });
    });
};