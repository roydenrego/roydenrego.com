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