/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/10/13
 * Time: 5:36 AM
 * To change this template use File | Settings | File Templates.
 */


/*____________REGULAR EXPRESSIONS or RegEx_______________*/

(function(){
    var dom = {button: document.querySelector("button"),
               input: document.querySelector("#input"),
               output: document.querySelector("#output")};

    dom.button.addEventListener("click", onClick);

    function onClick(e){
       console.log("dom.input");
       var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

       var pass = pattern.test(dom.input);
       dom.output.innerHTML = pass;

//       var phonePattern = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;


    }



})();