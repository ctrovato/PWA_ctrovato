/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/2/13
 * Time: 7:04 PM
 * To change this template use File | Settings | File Templates.
 */

/*   Carmine Trovato      11/26/2013       Assignment: The Duel Part One    */

(function(){

    console.log("Fight!");


    //Player Names
    var pOneName = "Batman";
    var pTwoName = "Spiderman";
    //var pOneName = prompt("Please type the name for player 1.");
    //var pTwoName = prompt("Please type the name for player 2.");

    //Player Damage
    var pOneDamage = 15;
    var pTwoDamage = 15;


    //Player Health
    var pOneHealth = 100;
    var pTwoHealth = 100;

    var round = 0;



    function fight() {
        //console.log("In the fight function");

        alert(pOneName + ": " + pOneHealth + "  =START=  " + pTwoHealth + " :" + pTwoName);

        for (i=0; i < 10; i++) {
            //console.log(i);

            // Math.floor(Math.random() * (max - min) + min);

            var minDamageOne = pOneDamage * .5;
            var minDamageTwo = pTwoDamage * .5;

            var f1 = Math.floor(Math.random() * (pOneDamage - minDamageOne) + minDamageOne);
            var f2 = Math.floor(Math.random() * (pTwoDamage - minDamageTwo) + minDamageTwo);


            //console.log(f1);
            //console.log(f2);

            //Damage Infliction
            pOneHealth -= f1;
            pTwoHealth -= f2;

            //alert(pOneName + ":" + pOneHealth + "  =START=  " + pTwoName + ":" + pTwoHealth);


            //console.log(pOneHealth);
            //console.log(pTwoHealth);


            var results = winnerCheck();
            console.log(results);



            if (results === "No Winner") {

                round++;

                alert(pOneName + ": " + pOneHealth + "  =ROUND " + round + " OVER=  " + pTwoHealth + " :" + pTwoName);

            } else {

                alert(results);
                break;

            };



        };

    };

    function winnerCheck() {

//        console.log("in winnerCheck Functions");
        console.log(pOneName + ": " + pOneHealth + "  =ROUND " + round + " OVER=  " + pTwoHealth + " :" + pTwoName);

        var result = "No Winner";


        if (pOneHealth < 1 && pTwoHealth < 1) {

            result = "You Both Died";

        } else if (pOneHealth < 1) {

            result =  pTwoName + " Wins!";

        } else if (pOneHealth < 1) {

            result =  pTwoName + " Wins!";

        };

        return result;

    };


//The script begins here//

//    console.log("Script Begin");

    fight();

})();