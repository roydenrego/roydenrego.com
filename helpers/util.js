class Util {
    
    static random_string(length) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    static get_ext(filename) {
        var arr = filename.split('.');
        return arr[arr.length-1];
    }
}

module.exports = Util;
