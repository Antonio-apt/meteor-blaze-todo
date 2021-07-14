module.export({TasksCollection:function(){return TasksCollection}},true);var Mongo;module.link("meteor/mongo",{Mongo:function(v){Mongo=v}},0);

const TasksCollection = new Mongo.Collection("tasks");
