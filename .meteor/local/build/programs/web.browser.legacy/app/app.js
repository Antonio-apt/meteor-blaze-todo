var require = meteorInstall({"imports":{"ui":{"App.html":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/App.html                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.link("./template.App.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.App.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.App.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("mainContainer"));
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("mainContainer");
Template["mainContainer"] = new Template("Template.mainContainer", (function() {
  var view = this;
  return HTML.DIV({
    class: "app"
  }, "\n        ", HTML.HEADER("\n            ", HTML.DIV({
    class: "app-bar"
  }, "\n                ", HTML.DIV({
    class: "app-header"
  }, "\n                    ", HTML.H1("📝️ To Do List ", Blaze.View("lookup:incompleteCount", function() {
    return Spacebars.mustache(view.lookup("incompleteCount"));
  })), "\n                "), "\n            "), "\n        "), "\n\n        ", HTML.DIV({
    class: "main"
  }, "\n            ", Blaze.If(function() {
    return Spacebars.call(view.lookup("isUserLogged"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "user"
    }, "\n                Hello, ", Blaze.View("lookup:getUser.username", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("getUser"), "username"));
    }), HTML.Raw(' <span class="logout" title="Sair">🚪</span>\n            ')), "\n            ", Spacebars.include(view.lookupTemplate("form")), "\n\n            ", HTML.UL({
      class: "tasks"
    }, "\n                ", Blaze.Each(function() {
      return Spacebars.call(view.lookup("tasks"));
    }, function() {
      return [ "\n                ", Spacebars.include(view.lookupTemplate("task")), "\n                " ];
    }), "\n            "), "\n            " ];
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("login")), "\n            " ];
  }), "\n        "), "\n    ");
}));

Template.__checkName("form");
Template["form"] = new Template("Template.form", (function() {
  var view = this;
  return HTML.DIV({
    class: "task-actions-container"
  }, HTML.Raw('\n        <form class="task-form">\n            <input class="input" type="text" name="text" placeholder="Type to add new tasks">\n            <button class="btn" type="submit">Add Task</button>\n        </form>\n        '), HTML.DIV({
    class: "filter"
  }, "\n            ", HTML.BUTTON({
    class: "btn",
    id: "hide-completed-button"
  }, "\n                ", Blaze.If(function() {
    return Spacebars.call(view.lookup("hideCompleted"));
  }, function() {
    return "\n                Show All\n                ";
  }, function() {
    return "\n                Hide Completed\n                ";
  }), "\n            "), "\n        "), "\n    ");
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Login.html":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Login.html                                                                                     //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.link("./template.Login.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Login.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.Login.js                                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<div class="login-container">\n        <form class="login-form">\n            <div class="login-line">\n                <label class="input-label" htmlfor="username">Username</label>\n                <input class="input login-input" type="text" placeholder="Username" name="username" required="">\n            </div>\n    \n            <div class="login-line">\n                <label class="input-label" htmlfor="password">Password</label>\n                <input class="input login-input" type="password" placeholder="Password" name="password" required="">\n            </div>\n            <div class="login-line">\n                <button class="btn login-button" type="submit">Login</button>\n            </div>\n        </form>\n    </div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Task.html":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Task.html                                                                                      //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.link("./template.Task.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Task.js":function module(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.Task.js                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

Template.__checkName("task");
Template["task"] = new Template("Template.task", (function() {
  var view = this;
  return HTML.LI({
    class: "task-line"
  }, "\n        ", HTML.LABEL({
    class: "checkbox-container"
  }, HTML.SPAN({
    class: "select-text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  })), "\n            ", HTML.INPUT({
    class: "toggle-checked",
    checked: function() {
      return Spacebars.mustache(view.lookup("isChecked"));
    },
    type: "checkbox"
  }), HTML.Raw('\n            <span class="checkmark"></span>\n        ')), HTML.Raw('\n        <button class="btn delete">&times;</button>\n    '));
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"App.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/App.js                                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var TasksCollection;
module.link("../db/TasksCollection", {
  TasksCollection: function (v) {
    TasksCollection = v;
  }
}, 2);
var ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict: function (v) {
    ReactiveDict = v;
  }
}, 3);
var toastr;
module.link("toastr", {
  "default": function (v) {
    toastr = v;
  }
}, 4);
module.link("./App.html");
module.link("./Task.js");
module.link("./Login.js");
var HIDE_COMPLETED_STRING = "hideCompleted";

var getUser = function () {
  return Meteor.user();
};

var isUserLogged = function () {
  return !!getUser();
};

var getTasksFilter = function () {
  var user = getUser();
  var hideCompletedFilter = {
    isChecked: {
      $ne: true
    }
  };
  var userFilter = user ? {
    userId: user._id
  } : {};

  var pendingOnlyFilter = _objectSpread(_objectSpread({}, hideCompletedFilter), userFilter);

  return {
    userFilter: userFilter,
    pendingOnlyFilter: pendingOnlyFilter
  };
};

Template.mainContainer.onCreated(function () {
  function mainContainerOnCreated() {
    this.state = new ReactiveDict();
  }

  return mainContainerOnCreated;
}());
Template.form.onCreated(function () {
  function mainContainerOnCreated() {
    this.state = new ReactiveDict();
  }

  return mainContainerOnCreated;
}());
Template.mainContainer.events({
  "click .user": function () {
    Meteor.logout();
  }
});
Template.mainContainer.helpers({
  tasks: function () {
    var instance = Template.instance();
    var hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);

    var _getTasksFilter = getTasksFilter(),
        pendingOnlyFilter = _getTasksFilter.pendingOnlyFilter,
        userFilter = _getTasksFilter.userFilter;

    if (!isUserLogged()) {
      return [];
    }

    return TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
      sort: {
        createdAt: -1
      }
    }).fetch();
  },
  incompleteCount: function () {
    if (!isUserLogged()) {
      return "";
    }

    var _getTasksFilter2 = getTasksFilter(),
        pendingOnlyFilter = _getTasksFilter2.pendingOnlyFilter;

    var incompleteTasksCount = TasksCollection.find(pendingOnlyFilter).count();
    return incompleteTasksCount ? "(" + incompleteTasksCount + ")" : "";
  },
  hideCompleted: function () {
    return Template.instance().state.get(HIDE_COMPLETED_STRING);
  },
  isUserLogged: function () {
    return isUserLogged();
  },
  getUser: function () {
    return getUser();
  }
});
Template.form.events({
  "submit .task-form": function (event) {
    // Prevent default browser form submit
    event.preventDefault(); // Get value from form element

    var target = event.target;
    var text = target.text.value; // Insert a task into the collection

    if (text != "") {
      Meteor.call("tasks.insert", text, function (err, res) {
        if (err) {
          toastr.error("Add task error");
        } else {
          toastr.success("Task added successfully");
        }
      });
    } // Clear form


    target.text.value = "";
  },
  "click #hide-completed-button": function (event, instance) {
    var currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
  }
});
Template.form.helpers({
  hideCompleted: function () {
    return Template.instance().state.get(HIDE_COMPLETED_STRING);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Login.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Login.js                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var toastr;
module.link("toastr", {
  "default": function (v) {
    toastr = v;
  }
}, 2);
module.link("./Login.html");
Template.login.events({
  "submit .login-form": function (event) {
    event.preventDefault();
    var target = event.target;
    var username = target.username.value;
    var password = target.password.value;
    Meteor.loginWithPassword(username, password, function (err) {
      if (err) {
        toastr.error("Login error");
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Task.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/Task.js                                                                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 1);
var toastr;
module.link("toastr", {
  "default": function (v) {
    toastr = v;
  }
}, 2);
module.link("./Task.html");
Template.task.events({
  "click .toggle-checked": function () {
    Meteor.call("tasks.setIsChecked", this._id, !this.isChecked);
  },
  "click .delete": function () {
    Meteor.call("tasks.remove", this._id, function (err, res) {
      if (err) {
        toastr.error("Remove task error");
      } else {
        toastr.success("Task removed successfully");
      }
    });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"db":{"TasksCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/db/TasksCollection.js                                                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.export({
  TasksCollection: function () {
    return TasksCollection;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var TasksCollection = new Mongo.Collection("tasks");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// client/main.js                                                                                            //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.link("../imports/ui/App.js");
module.link("toastr/build/toastr.min.css");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".mjs",
    ".ts",
    ".scss"
  ]
});

var exports = require("/client/main.js");