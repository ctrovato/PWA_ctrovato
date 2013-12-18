/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/15/13
 * Time: 6:14 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    function Car(){
        this.color="silver"
        this.make="Toyota";
        this.model="Camry";
    }
    Car.prototype.drive = function(){
        console.log("My",this.color,this.make,this.model,"is driving");
    };

    window.Car = Car
})();
