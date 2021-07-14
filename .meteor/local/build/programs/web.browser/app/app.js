var require = meteorInstall({"imports":{"ui":{"App.html":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/App.html                                                                                       //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
module.link("./template.App.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.App.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.App.js                                                                                //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

(function () {
  var renderFunc = (function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("mainContainer"));
});
  Template.body.addContent(renderFunc);
  Meteor.startup(Template.body.renderToDocument);
  if (typeof module === "object" && module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
      var index = Template.body.contentRenderFuncs.indexOf(renderFunc)
      Template.body.contentRenderFuncs.splice(index, 1);
      Template._applyHmrChanges();
    });
  }
})();

Template._migrateTemplate(
  "mainContainer",
  new Template("Template.mainContainer", (function() {
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
})),
);
if (typeof module === "object" && module.hot) {
  module.hot.accept();
  module.hot.dispose(function () {
    Template.__pendingReplacement.push("mainContainer");
    Template._applyHmrChanges("mainContainer");
  });
}

Template._migrateTemplate(
  "form",
  new Template("Template.form", (function() {
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
})),
);
if (typeof module === "object" && module.hot) {
  module.hot.accept();
  module.hot.dispose(function () {
    Template.__pendingReplacement.push("form");
    Template._applyHmrChanges("form");
  });
}

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

},"template.Login.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.Login.js                                                                              //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

Template._migrateTemplate(
  "login",
  new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<div class="login-container">\n        <form class="login-form">\n            <div class="login-line">\n                <label class="input-label" htmlfor="username">Username</label>\n                <input class="input login-input" type="text" placeholder="Username" name="username" required="">\n            </div>\n    \n            <div class="login-line">\n                <label class="input-label" htmlfor="password">Password</label>\n                <input class="input login-input" type="password" placeholder="Password" name="password" required="">\n            </div>\n            <div class="login-line">\n                <button class="btn login-button" type="submit">Login</button>\n            </div>\n        </form>\n    </div>');
})),
);
if (typeof module === "object" && module.hot) {
  module.hot.accept();
  module.hot.dispose(function () {
    Template.__pendingReplacement.push("login");
    Template._applyHmrChanges("login");
  });
}

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

},"template.Task.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/template.Task.js                                                                               //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //

Template._migrateTemplate(
  "task",
  new Template("Template.task", (function() {
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
})),
);
if (typeof module === "object" && module.hot) {
  module.hot.accept();
  module.hot.dispose(function () {
    Template.__pendingReplacement.push("task");
    Template._applyHmrChanges("task");
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"App.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// imports/ui/App.js                                                                                         //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let TasksCollection;
module.link("../db/TasksCollection", {
  TasksCollection(v) {
    TasksCollection = v;
  }

}, 2);
let ReactiveDict;
module.link("meteor/reactive-dict", {
  ReactiveDict(v) {
    ReactiveDict = v;
  }

}, 3);
let toastr;
module.link("toastr", {
  default(v) {
    toastr = v;
  }

}, 4);
module.link("./App.html");
module.link("./Task.js");
module.link("./Login.js");
const HIDE_COMPLETED_STRING = "hideCompleted";

const getUser = () => Meteor.user();

const isUserLogged = () => !!getUser();

const getTasksFilter = () => {
  const user = getUser();
  const hideCompletedFilter = {
    isChecked: {
      $ne: true
    }
  };
  const userFilter = user ? {
    userId: user._id
  } : {};

  const pendingOnlyFilter = _objectSpread(_objectSpread({}, hideCompletedFilter), userFilter);

  return {
    userFilter,
    pendingOnlyFilter
  };
};

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
});
Template.form.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
});
Template.mainContainer.events({
  "click .user"() {
    Meteor.logout();
  }

});
Template.mainContainer.helpers({
  tasks() {
    const instance = Template.instance();
    const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    const {
      pendingOnlyFilter,
      userFilter
    } = getTasksFilter();

    if (!isUserLogged()) {
      return [];
    }

    return TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
      sort: {
        createdAt: -1
      }
    }).fetch();
  },

  incompleteCount() {
    if (!isUserLogged()) {
      return "";
    }

    const {
      pendingOnlyFilter
    } = getTasksFilter();
    const incompleteTasksCount = TasksCollection.find(pendingOnlyFilter).count();
    return incompleteTasksCount ? "(".concat(incompleteTasksCount, ")") : "";
  },

  hideCompleted() {
    return Template.instance().state.get(HIDE_COMPLETED_STRING);
  },

  isUserLogged() {
    return isUserLogged();
  },

  getUser() {
    return getUser();
  }

});
Template.form.events({
  "submit .task-form"(event) {
    // Prevent default browser form submit
    event.preventDefault(); // Get value from form element

    const {
      target
    } = event;
    const text = target.text.value; // Insert a task into the collection

    if (text != "") {
      Meteor.call("tasks.insert", text, (err, res) => {
        if (err) {
          toastr.error("Add task error");
        } else {
          toastr.success("Task added successfully");
        }
      });
    } // Clear form


    target.text.value = "";
  },

  "click #hide-completed-button"(event, instance) {
    const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
  }

});
Template.form.helpers({
  hideCompleted() {
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
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let toastr;
module.link("toastr", {
  default(v) {
    toastr = v;
  }

}, 2);
module.link("./Login.html");
Template.login.events({
  "submit .login-form"(event) {
    event.preventDefault();
    const {
      target
    } = event;
    const username = target.username.value;
    const password = target.password.value;
    Meteor.loginWithPassword(username, password, err => {
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
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 1);
let toastr;
module.link("toastr", {
  default(v) {
    toastr = v;
  }

}, 2);
module.link("./Task.html");
Template.task.events({
  "click .toggle-checked"() {
    Meteor.call("tasks.setIsChecked", this._id, !this.isChecked);
  },

  "click .delete"() {
    Meteor.call("tasks.remove", this._id, (err, res) => {
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
  TasksCollection: () => TasksCollection
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const TasksCollection = new Mongo.Collection("tasks");
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