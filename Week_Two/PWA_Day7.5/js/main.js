/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/14/13
 * Time: 6:34 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){

        var dom = {name: document.querySelector("#name"),
                   isbn: document.querySelector("#isbn"),
                   author: document.querySelector("#author"),
                   price: document.querySelector("#price"),
                   button: document.querySelector("#next")
        };

        var books = [];
        var counter = 0;
        var bookNames = ["Titanic", "Hobbit", "JavaScript", "1984", "Sharknado", "Drinking for dumbies"];
        var authorNames = ["Bill", "Scott", "Bob", "Ryan", "Manton", "Carmine", "Joey", "Eric", "Alan"];

        dom.button.addEventListener("click", onClick);

        makeBooks(10);
        console.log(books);
        updateHTML();


    function onClick(event){
        counter++;
        //concole.log("Clicked");
        if(counter > books.length -1){
            counter = 0;
        }

            updateHTML();
        }


    function makeBooks(n){

        for(var i=0;i<n;i++){
            var randyNum = ~~(Math.random()*bookNames.length);
            var randyAuthors = ~~(Math.random()*authorNames.length);
            var book = new Book();

            book.name = bookNames[randyNum];
            book.author = authorNames[randyAuthors];
            book.isbn = Math.random();
            book.price = ~~(Math.random()*51+50);
            books.push(book);
        }

    }
    console.log();

    function updateHTML (){
        dom.name.innerHTML = books[counter].name;
        dom.author.innerHTML = books[counter].author;
        dom.isbn.innerHTML = books[counter].isbn;
        dom.price.innerHTML = books[counter].price;

    }


})();
