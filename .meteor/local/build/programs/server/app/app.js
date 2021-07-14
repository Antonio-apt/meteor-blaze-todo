var require = meteorInstall({"imports":{"api":{"tasksMethods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/tasksMethods.js                                       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 0);
let TasksCollection;
module.link("../db/TasksCollection", {
  TasksCollection(v) {
    TasksCollection = v;
  }

}, 1);
Meteor.methods({
  "tasks.insert"(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    TasksCollection.insert({
      text,
      createdAt: new Date(),
      userId: this.userId
    });
  },

  "tasks.remove"(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    TasksCollection.remove(taskId);
  },

  "tasks.setIsChecked"(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    TasksCollection.update(taskId, {
      $set: {
        isChecked
      }
    });
  }

});
///////////////////////////////////////////////////////////////////////

}},"db":{"TasksCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/db/TasksCollection.js                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 1);
let TasksCollection;
module.link("/imports/db/TasksCollection", {
  TasksCollection(v) {
    TasksCollection = v;
  }

}, 2);
module.link("/imports/api/tasksMethods");

const insertTask = (taskText, user) => TasksCollection.insert({
  text: taskText,
  userId: user._id,
  createdAt: new Date()
});

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";
Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    ["First Task", "Second Task", "Third Task", "Fourth Task", "Fifth Task", "Sixth Task", "Seventh Task"].forEach(taskText => insertTask(taskText, user));
  }
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".mjs",
    ".ts"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdGFza3NNZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9pbXBvcnRzL2RiL1Rhc2tzQ29sbGVjdGlvbi5qcyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4uanMiXSwibmFtZXMiOlsiY2hlY2siLCJtb2R1bGUiLCJsaW5rIiwidiIsIlRhc2tzQ29sbGVjdGlvbiIsIk1ldGVvciIsIm1ldGhvZHMiLCJ0ZXh0IiwiU3RyaW5nIiwidXNlcklkIiwiRXJyb3IiLCJpbnNlcnQiLCJjcmVhdGVkQXQiLCJEYXRlIiwidGFza0lkIiwicmVtb3ZlIiwiaXNDaGVja2VkIiwiQm9vbGVhbiIsInVwZGF0ZSIsIiRzZXQiLCJleHBvcnQiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJBY2NvdW50cyIsImluc2VydFRhc2siLCJ0YXNrVGV4dCIsInVzZXIiLCJfaWQiLCJTRUVEX1VTRVJOQU1FIiwiU0VFRF9QQVNTV09SRCIsInN0YXJ0dXAiLCJmaW5kVXNlckJ5VXNlcm5hbWUiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZpbmQiLCJjb3VudCIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSjtBQUFVQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNGLE9BQUssQ0FBQ0csQ0FBRCxFQUFHO0FBQUNILFNBQUssR0FBQ0csQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJQyxlQUFKO0FBQW9CSCxNQUFNLENBQUNDLElBQVAsQ0FBWSx1QkFBWixFQUFvQztBQUFDRSxpQkFBZSxDQUFDRCxDQUFELEVBQUc7QUFBQ0MsbUJBQWUsR0FBQ0QsQ0FBaEI7QUFBa0I7O0FBQXRDLENBQXBDLEVBQTRFLENBQTVFO0FBR2hGRSxNQUFNLENBQUNDLE9BQVAsQ0FBZTtBQUNiLGlCQUFlQyxJQUFmLEVBQXFCO0FBQ25CUCxT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LGFBQTVCLENBQUwsRUFBaUQ7QUFDL0NMLFlBQVEsQ0FBQ1MsVUFBVCxDQUFvQjtBQUNsQkMsY0FBUSxFQUFFTCxhQURRO0FBRWxCTSxjQUFRLEVBQUVMO0FBRlEsS0FBcEI7QUFJRDs7QUFFRCxRQUFNSCxJQUFJLEdBQUdILFFBQVEsQ0FBQ1Esa0JBQVQsQ0FBNEJILGFBQTVCLENBQWI7O0FBRUEsTUFBSXhCLGVBQWUsQ0FBQytCLElBQWhCLEdBQXVCQyxLQUF2QixPQUFtQyxDQUF2QyxFQUEwQztBQUN4QyxLQUNFLFlBREYsRUFFRSxhQUZGLEVBR0UsWUFIRixFQUlFLGFBSkYsRUFLRSxZQUxGLEVBTUUsWUFORixFQU9FLGNBUEYsRUFRRUMsT0FSRixDQVFXWixRQUFELElBQWNELFVBQVUsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLENBUmxDO0FBU0Q7QUFDRixDQXJCRCxFIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVjayB9IGZyb20gXCJtZXRlb3IvY2hlY2tcIjtcclxuaW1wb3J0IHsgVGFza3NDb2xsZWN0aW9uIH0gZnJvbSBcIi4uL2RiL1Rhc2tzQ29sbGVjdGlvblwiO1xyXG5cclxuTWV0ZW9yLm1ldGhvZHMoe1xyXG4gIFwidGFza3MuaW5zZXJ0XCIodGV4dCkge1xyXG4gICAgY2hlY2sodGV4dCwgU3RyaW5nKTtcclxuXHJcbiAgICBpZiAoIXRoaXMudXNlcklkKSB7XHJcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoXCJOb3QgYXV0aG9yaXplZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgVGFza3NDb2xsZWN0aW9uLmluc2VydCh7XHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIFwidGFza3MucmVtb3ZlXCIodGFza0lkKSB7XHJcbiAgICBjaGVjayh0YXNrSWQsIFN0cmluZyk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnVzZXJJZCkge1xyXG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKFwiTm90IGF1dGhvcml6ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFRhc2tzQ29sbGVjdGlvbi5yZW1vdmUodGFza0lkKTtcclxuICB9LFxyXG5cclxuICBcInRhc2tzLnNldElzQ2hlY2tlZFwiKHRhc2tJZCwgaXNDaGVja2VkKSB7XHJcbiAgICBjaGVjayh0YXNrSWQsIFN0cmluZyk7XHJcbiAgICBjaGVjayhpc0NoZWNrZWQsIEJvb2xlYW4pO1xyXG5cclxuICAgIGlmICghdGhpcy51c2VySWQpIHtcclxuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihcIk5vdCBhdXRob3JpemVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBUYXNrc0NvbGxlY3Rpb24udXBkYXRlKHRhc2tJZCwge1xyXG4gICAgICAkc2V0OiB7XHJcbiAgICAgICAgaXNDaGVja2VkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IE1vbmdvIH0gZnJvbSBcIm1ldGVvci9tb25nb1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhc2tzQ29sbGVjdGlvbiA9IG5ldyBNb25nby5Db2xsZWN0aW9uKFwidGFza3NcIik7XHJcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gXCJtZXRlb3IvbWV0ZW9yXCI7XG5pbXBvcnQgeyBBY2NvdW50cyB9IGZyb20gXCJtZXRlb3IvYWNjb3VudHMtYmFzZVwiO1xuaW1wb3J0IHsgVGFza3NDb2xsZWN0aW9uIH0gZnJvbSBcIi9pbXBvcnRzL2RiL1Rhc2tzQ29sbGVjdGlvblwiO1xuaW1wb3J0IFwiL2ltcG9ydHMvYXBpL3Rhc2tzTWV0aG9kc1wiO1xuXG5jb25zdCBpbnNlcnRUYXNrID0gKHRhc2tUZXh0LCB1c2VyKSA9PlxuICBUYXNrc0NvbGxlY3Rpb24uaW5zZXJ0KHtcbiAgICB0ZXh0OiB0YXNrVGV4dCxcbiAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgfSk7XG5cbmNvbnN0IFNFRURfVVNFUk5BTUUgPSBcIm1ldGVvcml0ZVwiO1xuY29uc3QgU0VFRF9QQVNTV09SRCA9IFwicGFzc3dvcmRcIjtcblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICBpZiAoIUFjY291bnRzLmZpbmRVc2VyQnlVc2VybmFtZShTRUVEX1VTRVJOQU1FKSkge1xuICAgIEFjY291bnRzLmNyZWF0ZVVzZXIoe1xuICAgICAgdXNlcm5hbWU6IFNFRURfVVNFUk5BTUUsXG4gICAgICBwYXNzd29yZDogU0VFRF9QQVNTV09SRCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBBY2NvdW50cy5maW5kVXNlckJ5VXNlcm5hbWUoU0VFRF9VU0VSTkFNRSk7XG5cbiAgaWYgKFRhc2tzQ29sbGVjdGlvbi5maW5kKCkuY291bnQoKSA9PT0gMCkge1xuICAgIFtcbiAgICAgIFwiRmlyc3QgVGFza1wiLFxuICAgICAgXCJTZWNvbmQgVGFza1wiLFxuICAgICAgXCJUaGlyZCBUYXNrXCIsXG4gICAgICBcIkZvdXJ0aCBUYXNrXCIsXG4gICAgICBcIkZpZnRoIFRhc2tcIixcbiAgICAgIFwiU2l4dGggVGFza1wiLFxuICAgICAgXCJTZXZlbnRoIFRhc2tcIixcbiAgICBdLmZvckVhY2goKHRhc2tUZXh0KSA9PiBpbnNlcnRUYXNrKHRhc2tUZXh0LCB1c2VyKSk7XG4gIH1cbn0pO1xuIl19
