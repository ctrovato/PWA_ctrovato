/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/14/13
 * Time: 6:34 PM
 * To change this template use File | Settings | File Templates.
 */


(function(){

    function Book(){
        this.name= "";
        this.isbn = 1;
        this.author = "";
        this.price = 100;
    }

    Book.prototype.read= function(){
        console.log("Hey, Thanks for reading me. "+this.name);
    }

    window.Book = Book;


})();