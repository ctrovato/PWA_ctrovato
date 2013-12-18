/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/7/13
 * Time: 5:31 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var vgames = [{name:"Skyrim", genre:"RPG", rating:"M"},
                  {name:"FIFA", genre:"Sports", rating:"E"},
                  {name:"Madden 25", genre:"Sports", rating:"E"}];

    var students = [{name:"Eric", age:22},
                    {name:"Seth", age:21}]

//    display(students);
//    display(vgames);


//    var btn = document.getElementById("button");
//        console.log(btn);
    var counter = 0;
    var output1 = document.querySelector("#output1");
    var output2 = document.querySelector("#output2");
    var output3 = document.querySelector("#output3");
    output1.innerHTML= vgames[0].name;

    var btn = document.querySelector("#button");

    btn.addEventListener("click",onClick);

    function onClick(e){
        console.log("click",e);
        output1.innerHTML = vgames[counter].name;
        counter++;
        if (counter ==vgames.length){
            counter = 0;
            btn.removeEventListener("click",onClick);

        }


    }




})();