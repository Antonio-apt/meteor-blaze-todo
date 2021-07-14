module.export({TasksCollection:()=>TasksCollection},true);let Mongo;module.link("meteor/mongo",{Mongo(v){Mongo=v}},0);

const TasksCollection = new Mongo.Collection("tasks");
