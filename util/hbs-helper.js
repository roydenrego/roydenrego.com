const moment = require('moment');

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

var register = function(Handlebars) {
    var helpers = {
      // put all of your helpers inside this object
      printDate: function(str, type){

        var d = new Date(str);
        if(type == 1) {
            return d.getDate();
        }
        else if(type == 2)  {
            return monthNames[d.getMonth()];
        }
        else {
            return d.getFullYear();
        }
      },
      printJson: function(obj) {
          return JSON.stringify(obj);
      },
      stringEquals: function(str1, str2, block) {
        if(str1.localeCompare(str2) == 0) {
          return true;
        }
        return false;
      },
      wowDelay: function(index) {
        if(index == 0) {
          return 1.2;
        }
        
        return 1.2 + (index / 10);
      },
      printFullDate: function(str) {
        var d = moment(str);
        return d.format('DD/MM/gggg HH:mm:ss');
      },
      counter: function(index) {
        return index + 1;
      }
    };
  
    if (Handlebars && typeof Handlebars.registerHelper === "function") {
      // register helpers
      for (var prop in helpers) {
          Handlebars.registerHelper(prop, helpers[prop]);
      }
    } else {
        // just return helpers object if we can't register helpers here
        return helpers;
    }
  
  };
  
  module.exports.register = register;
  module.exports.helpers = register(null);   