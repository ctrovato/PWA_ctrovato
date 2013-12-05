/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/4/13
 * Time: 5:39 PM
 * To change this template use File | Settings | File Templates.
 */

/*   Carmine Trovato      12/03/2013       Assignment: The Duel Part TWO    */

(function(){

    console.log("Fight!");


    var pOne = ["CARMINE", 15, 100];
    var pTwo = ["IRON MAN", 15, 100];
    var round = 0;

    function fight() {

        alert(pOne[0] + ": " + pOne[2] + "  =START=  " + pTwo[2] + " :" + pTwo[0]);

        for (i=0; i < 10; i++) {
            /* console.log(i); */


            var minDamageOne = pOne[1] * .5;
            var minDamageTwo = pTwo[1] * .5;

            var f1 = Math.floor(Math.random() * (pOne[1] - minDamageOne) + minDamageOne);
            var f2 = Math.floor(Math.random() * (pTwo[1] - minDamageTwo) + minDamageTwo);


            /* Damage Infliction */
            pOne[2] -= f1;
            pTwo[2] -= f2;


            var results = winnerCheck();
            console.log(results);



            if (results === "No Winner") {

                round++;

                alert(pOne[0] + ": " + pOne[2] + "  =ROUND " + round + " OVER=  " + pTwo[2] + " :" + pTwo[0]);

            } else {

                alert(results);
                break;

            };



        };

    };

    function winnerCheck() {


        console.log(pOne[0] + ": " + pOne[2] + "  =ROUND " + round + " OVER=  " + pTwo[2] + " :" + pTwo[0]);

        var result = "No Winner";


        if (pOne[2] <= 0 && pTwo[2] <= 0) {

            result = "You Both Died";

        } else if (pOne[2] <= 0) {

            result =  pTwo[0] + " Wins!";

        } else if (pOne[2] <= 0) {

            result =  pTwo[0] + " Wins!";

        };

        return result;

    };


/* Calls the fight function script below */

    fight();

})();