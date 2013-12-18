/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/10/13
 * Time: 4:45 AM
 * To change this template use File | Settings | File Templates.
 */


var fighterArray= [{name: "CARMINE", damage: 35, health: 100}, {name: "IRON MAN", damage: 35, health: 100}];
var round= 0,
    carmineDiv= document.getElementById("carmine"),
    ironmanDiv= document.getElementById("ironman"),
    roundDiv= document.getElementById("round"),
    fightButton= document.getElementById("fight_box");
carmineDiv.innerHTML= fighterArray[0].name+' :  '+ fighterArray[0].health;
ironmanDiv.innerHTML= fighterArray[1].name+' :  '+ fighterArray[1].health;
function fight(){
    fightButton.onclick= function fight(){
        var player1Hit= fighterArray[0].damage/ 2,
            player2hit= fighterArray[1].damage/ 2;
        player1Damage= Math.floor(Math.random()*player1Hit);
        player2Damage= Math.floor(Math.random()*player2hit);
        fighterArray[0].health-=player1Damage;
        fighterArray[1].health-=player2Damage;
        document.getElementById("Vs").style.display= "none";
        var damageResult= winnerSelector();
        if(damageResult== "no winner"){
            round++;
            carmineDiv.innerHTML= fighterArray[0].name+' :  '+ fighterArray[0].health;
            ironmanDiv.innerHTML= fighterArray[1].name+' :  '+ fighterArray[1].health;
            roundDiv.innerHTML= 'ROUND '+round+' OVER';
        }
        function winnerSelector(){
            var result= 'no winner';
            if(fighterArray[0].health<1 && fighterArray[1].health<1){
                carmineDiv.innerHTML='YOU BOTH DIE';
                ironmanDiv.innerHTML= 'DOUBLE KO!!!';
                result= 'Double KO';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(fighterArray[0].health<1){
                carmineDiv.innerHTML='GAME OVER';
                ironmanDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'IRON MAN Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(fighterArray[1].health<1){
                carmineDiv.innerHTML='GAME OVER';
                ironmanDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'CARMINE Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health<fighterArray[1].health){
                carmineDiv.innerHTML='GAME OVER';
                ironmanDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'IRON MAN Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health>fighterArray[1].health){
                carmineDiv.innerHTML='GAME OVER';
                ironmanDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'CARMINE Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health== fighterArray[1].health){
                carmineDiv.innerHTML='GAME OVER';
                ironmanDiv.innerHTML= "IT'S A DRAW";
                result= "It's a Draw";
                document.getElementById("fight_box").disabled= true;
            }return result;
        }
    }
}fight();