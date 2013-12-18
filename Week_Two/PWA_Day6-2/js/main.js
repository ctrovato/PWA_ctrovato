/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/12/13
 * Time: 8:04 AM
 * To change this template use File | Settings | File Templates.
 */
(function(){


    var interval = setInterval(update,1000);
    var person = new Student("Eric", [80, 90 ,100 ,50 ,75]);
    var person2 = new Student("Ryan", [60, 70, 50, 75,95]);

    function update(){
        console.log("Hello");
    }

})();