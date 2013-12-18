/**
 * Created with JetBrains WebStorm.
 * User: CarmineTrovato
 * Date: 12/3/13
 * Time: 10:20 PM
 * To change this template use File | Settings | File Templates.
 */


(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
     - accept 1 parameter into the function that will be an array of unlimited numbers
     - find the average of all the numbers
     - return the average from the function
     - console.log the answer outside of the function

     2.  create a function named 'fullName'
     - accept 2 parameters into the function that are strings (firstname and lastname)
     - return the name after it has been concatenated
     - console.log the answer outside of the function

     3.  create a function named 'wordCount'
     - accept 1 parameter into the function that is a long string of text words
     - create a function that counts all the words and return the answer
     - console.log the answer outside of the function

     4.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function

     6.  create a function named 'findNum'
     - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
     - if the second parameter being passed is "false" or null then
     - create an array with all of the odd numbers from
     the array
     - else - create an array with all of the even numbers
     from the array
     - return the array
     - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var numbers = [100, 500, 200, 300, 200, 800]; /* number values */
    var funAverage = avgNumbers(numbers); /* this variable is equal to the result of the function and applies the arguments. */

    function avgNumbers(array) { /*average number function   */

        var total = 0;
        var average;


        array.forEach(function(i) { /* the function adds each element from together */

            total += i; /* adds the array elements together */

        })

        average = total / array.length; /* the average number calculation */

        return average; /*returns the average */

    };


    console.log("The average is: " + funAverage);





    //--------------------------------------------------------
    console.log("2. concat first and last name");

    var names = ["CARMINE", "TROVATO"]; /* name values */

    var nameResult = fullName(names[0], names[1]); /* is equal to the result of the function */


    function fullName(string1, string2) { /* combines the two strings from var names to themselves  */

        var concat = string1 + " " + string2; /* concatinating the strings together */

        return concat; /* result   */

    }

    console.log(nameResult);



    //--------------------------------------------------------
    console.log("3. word count");

    var wordCountSentence = "this is test text that is being used as input to a function"; /* sentence  */
    var funWordCount = wordCount(wordCountSentence); /* is equal to the result of the function  */

    function wordCount(words) { /* function that is going to take in our string variable and log how many words it contains */

        var whiteSpace = 0; /* white space initial value   */

        for (var i = 0; i < words.length; i++) { /* goes through every character */

            if (words.charAt(i) === " ") { /* when encountered with a white space do this */

                whiteSpace++; /* adds 1 to the whitespace variable  */

            }

        };

        return whiteSpace +1; /* returns the amount of white space plus 1 to give you the amount of words  */

    }

    console.log("There are " + funWordCount + " words in your sentence.");




    //--------------------------------------------------------
    console.log("4. sentence char count");

    var charCountSentence = "this is test text that is being used as input to a function"; //sentence that we will be finding the amount of characters for
    var funCharCount = charCount(charCountSentence); //is equal to the result of the function

    function charCount(characters) { //function that is going to count our characters

        var charArray = characters.split(""); //splits the characters into there own element within an array
        var charQuantity = charArray.length; //is equal to the length of the charArray

        return charQuantity;

    }

    console.log("There are " + funCharCount + " characters in your sentence.");

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");


    var vowelWord = "mississippi"; //word that we will be finding the number of vowels for
    var vowels = vowelsInWord(vowelWord); //is equal to the functions result

    function vowelsInWord(vowelWord) { //function that is going to determine whether or not a character is a vowel or not

        var sentenceArray = vowelWord.split(""); //splits each character into its own element within an array
        var characters = sentenceArray.length; //is equal to the length of the sentenceArray
        var vowelCount = 0; //initial vowel amount

        for (var i = 0; i < vowelWord.length; i++) { //loops through each character in the array

            if (vowelWord.charAt(i) == "a") { //if it the current character being processed is an a do the following

                vowelCount++; //add 1 to the vowelCount

            } else if (vowelWord.charAt(i) == "e") { //if it the current character being processed is an e do the following

                vowelCount++; /*add 1 to the vowelCount */

            } else if (vowelWord.charAt(i) == "i") { /*if it the current character being processed is an i do the following  */

                vowelCount++; /*add 1 to the vowelCount */

            } else if (vowelWord.charAt(i) == "o") { /*if it the current character being processed is an o do the following */

                vowelCount++; /*add 1 to the vowelCount */

            } else if (vowelWord.charAt(i) == "u") { /*if it the current character being processed is an u do the following  */

                vowelCount++; /*add 1 to the vowelCount  */

            }


        };

        return vowelCount;


    }

    console.log("There are " + vowels + " vowels in the word.");


    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");
    var numberList = [40, 44, 17, 35, 67, 34, 240, 19]; /*list of numbers we will be determining if they are even or odd  */
    var trueOrFalse = false; /*boolean that determines if we are logging even or odd numbers (true = even, false = odd) */
    var findNumFunction = findNum(numberList, trueOrFalse); /* is equal to the result of the function  */

    function findNum(numb, bool) { /*checks to see if a value is a even or odd number */

        var oddNumsArray = []; /* where the odd numbers will be stored */
        var evenNumsArray = []; /* where the even numbers will be stored */
        var result; /* result   */



        for (i = 0; i < numb.length; i++) { /* runs through each array element */




            if (bool == true && numb[i] % 2 == 0) { /* if the boolean is true and the number comes back even do the following  */


                evenNumsArray.push(numb[i]); /*push the element into the evenNumsArray */
                result = evenNumsArray; /* the result to return is evenNumsArray  */


            } else if (bool == false && numb[i] % 2 != 0) { /* else if the boolean is false  the number comes back odd */


                oddNumsArray.push(numb[i]); /*push the element into the oddNumsArray */
                result = oddNumsArray; /*the result to return is oddNumsArray*/

            }

        }
        return result;

    }

    console.log(findNumFunction);


})();