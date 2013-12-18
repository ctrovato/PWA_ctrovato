/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/12/13
 * Time: 8:28 AM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    function Student(n, g){
        this.name = n;
        this.grades= g;
        console.log("Student Created");
    }

    Student.prototype.average = function(){

        var total = 0;
        this.grades.forEach(function(e){
            total += e;
        });
        return total/this.grades.length;


        /* or this
         for(i=0;i,this.grades.length; i++){
         total += this.grades[i];
         }
         */

    }

    window.Student = Student;

})();