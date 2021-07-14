import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import toastr from "toastr";

import "./Task.html";

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
  },
});
