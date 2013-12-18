/**
 * Created with JetBrains WebStorm.
 * User: Carmine Trovato
 * Date: 12/7/13
 * Time: 10:48 PM
 * To change this template use File | Settings | File Templates.
 */
console.log("HEY");
(function(){

    //Array for the students
    var students = [{name:"Carmine", date:" ", grades: [89, 95, 86]},
                    {name:"Mike", date:" ", grades: [86, 95, 87]},
                    {name:"Chris", date:" ", grades: [80, 90, 99]}];
    //Variable referencing to the 'p' tags in the html document
    var name = document.querySelector("#name");
    var date = document.querySelector("#date");
    var grades = document.querySelector("#grades");
    var average = document.querySelector("#average");
    var button = document.querySelector("#button");
    var counter = 0





       name.innerHTML= students[0].name;
       date.innerHTML= students[0].date;
       grades.innerHTML= students[0].grades;
       average.innerHTML= students[0].average;


    button.addEventListener("click",onClick);




    /*________CLICK FUNCTION_________*/
    function onClick(e){
        console.log("click",e);
        output1.innerHTML = students[counter].name;
        counter++;
        if (counter ==students.length){
            counter = 0;

            button.addEventListener("click",onClick);

        }


    }






    /*________DISPLAY ARRAY_________*/


    display(students);
    function display(array){

        for(var i=0;i<array.length;i++){
            for( var p in array[i]){
                console.log(p+" "+array[i][p]);
            }

        }
    }




    /* ________DATE_______ */

    newDate();

    function newDate(){
        var days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
        var date = new Date();
        var month =  date.getMonth()+1;
        var day = date.getDate();
        var year = date.getFullYear();
        var dayName = days[date.getDay()];

        return dayName+ ":"+ month+"/"+day+"/"+year;

    }





    /*________GRADE AVERAGE______ */


    avr();
    function avr(grades){
        var total = 0;
        for(var i=0; i < grades.length; i++){
            total += grades[i];
        };
        return ~~(total/grades.length);
    };

    //function to call(run) the function 'avr' and add the property 'average' to each of the objects in the array with its value
    function len(){
        for (var i=0; i<students.length; i++){
            students[i].average = avr(students[i].grades);
        };


    };

    len();





})();