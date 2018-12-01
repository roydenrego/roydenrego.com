/* global afterAll */

const request = require('supertest');
//const superagent = require('superagent');
const app = require('../app')
const mongoose = require('../app').mongoose;

require('dotenv').config();

var cookie;
var agent = request.agent(app);

describe(`Test the Admin API's`, () => {

    
    it('logs the user in', (done) => {
            agent
                .post('/admin/login')
                .send({ email: process.env.TEST_ACC_EMAIL, password: process.env.TEST_ACC_PASSWORD })
                .expect(302)
                .expect('Location', '/admin')
                .end(function(err, res) {
                    if (err) return done(err);
                    console.log(res.headers['set-cookie']);
                    cookie = res.headers['set-cookie'];
                    return done();
                });
        });
        
    // it('should allow access to admin when logged in', function(done) {
    //     console.log(cookie.toString());
    //     var req = agent
    //         .get('/admin')
    //         .set({ 'Cookie': cookie.toString() })
    //         .expect(200, done);
    // });

    // it('returns a list of uploaded images', (done) => {
    //     agent
    //         .post('/admin/getimages')
    //         .set('Accept', 'application/json')
    //         .set({ 'Cookie': cookie.toString() })
    //         .expect('Content-Type', /json/).expect(200,done);
    // });

    // describe(`Analytics API's`, () => {

    //     it('should return minimal status', function(done) {
    //         var req = request(app)
    //                     .post('/admin/seo/minstats')
    //                     .send({days: 10});
    //         agent.attachCookies(req);
    //         req.expect('Content-Type', /json/).expect(200, done);
    //     });

    // });

    afterAll(() => {
        mongoose.connection.close();
        mongoose.disconnect()
    });
})
