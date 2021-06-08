var task = {
    title: "My task",
    description: "My description"
};

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});
console.log(urgentTask.toString());

//constructor function
function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function() {
        return this.param1 + ' ' + this.param2;
    };
}