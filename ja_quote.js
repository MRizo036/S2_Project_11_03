"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Maria De Jesus Rizo
   Date:   2.12.19
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
/* The code below was done with the help of Mr.Buckler. This means that the code may not exactly be written in the manner in which  the textboom specifies but still serves the same purpose as it is supposed to. */

/* The var below creates a variable named size which is set equal to the value of 10. */
var size = 10;
/* The line below creates a variable called randomQ which is set equal to the value of the function randomInt. Inside of randomInt function, the parameters of the functions are set to 0 and size. */
var randomQ = randomInt(0, size);
/* alert("randomQ: " + randomQ); 
This was added in order to test the values that were being put out by the randomQ variable. */
/* The line below states the vlaue of the element with the id of quote will be changed within the HTML document. Setting the getQuote(randomQ) chooses a random quote from the getQuote function which are numbered from 0 to 9 */
document.getElementById("quote").innerHTML = getQuote(randomQ);
/* The line below creates a function names randomInt. The functions is given parameters inside of the paranthesis which are lowest(equal to zero) and size(set in the first line and equal to 10). */
function randomInt(lowest, size) {
    /* The line bolew will generate an whole integer rounded down randomely mutiplied by the value of size. This value is then returned as the function. */
    return Math.floor(Math.random() * size);
}

function getQuote(n) {
    var quotes = [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
        "Life seems but a quick succession of busy nothings.",
        "Our scars make us know that our past was for real.",
        "I cannot speak well enough to be unintelligible.",
        "One cannot be always laughing at a man without now and then stumbling on something witty.",
        "Men were put into the world to teach women the law of compromise.",
        "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
    ];

    return quotes[n];
}