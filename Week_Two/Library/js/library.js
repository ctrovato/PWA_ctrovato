/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/15/13
 * Time: 5:33 PM
 * To change this template use File | Settings | File Templates.
 */
window.utils = {};

/*_________Tri AREA________*/
utils.getTriArea = function(b,h){
    var area = .5*(b*h);
    return area

};


/*_______AVERAGE______*/

utils.getAverage = function average(num) {
    var total = 0;

    num.forEach(function(t){
        total+= t;
    });

    return total / num.length;
};



/*________Miles To Kilometers_______*/

utils.convertMilesKm = function milesKilometers(miles){
    var kilometers=miles/0.62137;
    return kilometers;
};


/*________Feet to  Meter_______*/

utils.convertFeetMeters= function feetMeters(feet){
    var meters = feet*3.2808;
    return meters;


};