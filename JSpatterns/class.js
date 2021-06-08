'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }

    save() {
        console.log('saving task: ' + this.name);

    }
}

var task1 = new Task('create a demo const');
var task2 = new Task('create a demo module');
var task3 = new Task('create a demo singletone');
var task4 = new Task('create a demo proto');

task1.complete();
task2.save();
task3.save();
task4.save();