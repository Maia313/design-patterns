/* global require */
var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({ name: 'create a demo module' });
var task3 = new Task({ name: 'create a demo singletone' });
var task4 = new Task({ name: 'create a demo proto' });

task1.complete();
task2.save();
task3.save();
task4.save();