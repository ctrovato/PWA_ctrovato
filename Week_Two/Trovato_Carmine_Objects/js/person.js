/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/13/13
 * Time: 2:25 PM
 * To change this template use File | Settings | File Templates.
 */


Person.jobs =["Designer","Programmer","Student","Teacher"];
Person.actions = ["Gaming","Sleeping","Eating","Working","Exercising"];

function Person(name, row) {
    this.name = name;
    this.row = row;
    this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
    this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
}

Person.prototype.update = function(){
    // this function will change the actions in actions column
    this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

window.Person=Person;
};
