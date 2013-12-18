(function(){


/*______________  Students ___________ */
    var games = [{title: "HALO", info:{type:"Shooter", genre: "Sci-Fi", system:"Xbox"}, review:[8.5, 9.0, 9.5, 9.5], average: 0},
                 {title: "Killzone", info:{type:"Shooter", genre: "Sci-Fi", system:"Playstation"}, review:[9.0, 8.5, 8.7,9.0], average: 0}];

    var clickCount = 0;





/* ____________Console Log Original_____________*/
    function log () {
        for (var i = 0; i < games.length; i++){
            console.log("Title: " + games[i].title);
            console.log("Info: " + games[i].info.type + ", " + games[i].info.genre + ", " + games[i].info.system);
            console.log("Review: " + games[i].review[0] + ", " + games[i].review[1] + ", " + games[i].review[2]);
        }
    }
    log();


  console.log("____________NEW GAME ADDED______________")

/*________________ADD GAME______________*/
    addGame("Super Mario Bros", "RPG", "Action", "Wii U", [9.8, 9.5, 9.7,9.0]);
    function addGame(title, type, genre, system, review, reviewAvg) {
        var object = {};
        object.title = title;
        object.info = {type: type, genre: genre, system: system};
        object.review = review;

        games.push(object)
    }

    log();




/* _______________Avg Game Review Function___________*/
    function reviewAvg(review) {
        var total = 0;

        review.forEach(function(e){
            total+= e;
        });

        return total / review.length;
    }

    for (var i = 0; i < games.length; i++) {

        games[i].average = reviewAvg(games[i].review);




/*__________________Click Function___________ */

        var btn = document.querySelector(".buttonred");
        btn.addEventListener("click", onClick); /* checks for click */

        document.querySelector("#title").innerHTML = "Title: " + games[0].title;
        document.querySelector("#info").innerHTML = "Info: " + games[0].info.type + ", " + games[0].info.genre + ", " + games[0].info.system;
        document.querySelector("#review").innerHTML = "Review: " + games[0].review;
        document.querySelector("#average").innerHTML = "Avg Review: " + games[0].average;



        function onClick() {  /* onClick function */

            btn.addEventListener("click", clickCount++);

            if (clickCount == 1) {

                document.querySelector("#title").innerHTML = "Title: " + games[1].title;
                document.querySelector("#info").innerHTML = "Info: " + games[1].info.type + ", " + games[1].info.genre + ", " + games[1].info.system;
                document.querySelector("#review").innerHTML = "Review: " + games[1].review;
                document.querySelector("#average").innerHTML = "Avg Review: " + games[1].average;



            } else if (clickCount >= 2) {

                document.querySelector("#title").innerHTML = "Title: " + games[2].title;
                document.querySelector("#info").innerHTML = "Info: " + games[2].info.type + ", " + games[2].info.genre + ", " + games[2].info.system;
                document.querySelector("#review").innerHTML = "Review: " + games[2].review;
                document.querySelector("#average").innerHTML = "Avg Review: " + games[2].average;



                btn.removeEventListener("click", onClick);

            }


        }
    }
}());