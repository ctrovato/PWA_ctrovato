/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/10/13
 * Time: 5:59 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    var magicNumber = ~~(Math.random()*10+1);
    var dom = {button: document.querySelector("button"),
               output: document.querySelector("#output"),
               input: document.querySelector("#input"),
               newButton: document.querySelector("#newButton") };

    var guess = 3;
    var userNumber = 0;

dom.button.addEventListener("click", onClick);

console.log(magicNumber);


function onClick(){


validate();
}

    function validate(){
        var inputValue = dom.input.value;

        if(inputValue < 1 || inputValue > 10){
            dom.output.innerHTML = "Enter a Number  1 through 10.";
        }
        else if(isNaN(inputValue)) {
            dom.output.innerHTML = "Enter a Number  1 through 10.";
        }
        else if(inputValue == ""){
            dom.output.innerHTML = "Enter a Number  1 through 10.";
        }
        else{
           playGame(inputValue);
        }
    }

function playGame(v){
        if(guess == 1){
                dom.button.removeEventListener("click", onClick);
                dom.output.innerHTML="Game Over";
                dom.newButton.innerHTML = '<button onClick = "history.go(0)">Try Again</button>';
            }
        else if(v < magicNumber){
            guess--;
            dom.output.innerHTML= "Your guess is too low, You have "+guess+" left.";
        }
        else if(v > magicNumber){
            guess--;
            dom.output.innerHTML="Your guess is too high, You have "+guess+" left.";
        }
        else{
            dom.output.innerHTML="CORRECT !!!";
            dom.newButton.innerHTML= '<button onClick = "history.go(0)">Try Again</button>';
        }
}

})();