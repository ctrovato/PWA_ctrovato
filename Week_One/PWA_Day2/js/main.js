/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/3/13
 * Time: 5:43 PM
 * To change this template use File | Settings | File Templates.
 */

/*    SWITCH FUNCTION    */
//function roll(die)   {
//
//  var number = ~~(Math.random()*die+1);
//
//  switch(number){
//      case 1:
//          console.log("You rolled a one");
//          break;
//
//      case 2:
//              console.log("You rolled a two");
//          break;
//
//     default:
//          console.log("You rolled a two");
//          break;
//
//  }
//}

//
//var test  = "Hello";
//
//var firstLetter =  test.charAt(0);  /* H */
//var partialString = test.substr(1,3);    /* ell  */
//
//test.length()  /*  5  */



/* DATE FUNCTION  */

function coolDate(){
    var days = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    var date = new Date();
    var month =  date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();
    var dayName = days[date.getDay()];


    return dayName+ ":"+ month+"/"+day+"/"+year;

}
    console.log(coolDate());



/*   DEAL FUNCTION  */
//var deck=["a","2","3","4","5","6","7","8","9","10","jack","queen","king"];
//play();
//
//function deal(){
//  var cardNumber= ~~(Math.random()*deck.length);
//  var card = deck[cardNumber];
//  deck.splice(cardNumber,1);
//  return card;
//}
//
//function play(){
//     for(i=0;i<13;i++){
//
//    console.log(i,deal(),deck);
//    }
//
//}





