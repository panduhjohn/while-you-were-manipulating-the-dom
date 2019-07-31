// TODO: Find the biggify numbers button on our page.
const biggifyNumbersButton = document.querySelector('.big');
//When it's clicked, launch `biggify`.
biggifyNumbersButton.onclick = biggify;

// TODO: Find the biggify numbers button on our page.
const nasafyButton = document.querySelector('.blastoff');
//When it's clicked, launch `biggify`.
nasafyButton.onclick = nasafy;

// TODO: Find the crazify string button on our page.
const crazifyStringButton = document.querySelector('.crazy');
//When it's clicked, launch `stringify`.
crazifyStringButton.onclick = crazify;

// TODO: Find the reverse string button on our page.
const reverseStringButton = document.querySelector('.reverse');
//When it's clicked, launch `reverse`.
reverseStringButton.onclick = reverse;

// TODO: Find the lucky numbers button on our page.
const luckyNumbersButton = document.querySelector('.lucky');
//When it's clicked, launch `luckify`.
luckyNumbersButton.onclick = luckify;

// TODO: Find the lucky numbers button on our page.
const titleCaseButton = document.querySelector('.titlec');
//When it's clicked, launch `titleify`.
titleCaseButton.onclick = titleify;


function biggify(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
    Call the function `clearList`, which we have defined for you. You
    don't need to put anything in the parentheses to tell it what to clear, just
    call it--it knows what to do!
    */

    clearList();

    // Find the input box the user is typing in and put the DOM node in a variable.
    // Make sure you're using the right selector!

    const bigInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Save it to a variable.

    let bigValue = bigInput.value;

    /*
    Add 9000 to the user's number.
    
    A hint: if this isn't working, it _might_ be because of the JavaScript type of the data coming in.
    
    Use the pre-defined `printValue` function below to print out the result,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
    */
    bigValue = Number(bigValue);
    if (isNaN(bigValue)) {
        alert(`Please enter a valid number`);
        bigInput.value = null;
        return;
    }
    const bigFinal = bigValue + 9000;
    printValue(bigFinal);


    /*
    Stretch goal TODO:
      Using the variable we saved above for the input box, clear its value.
      
      This is a very useful feature, as it's an annoying and unexpected user
      experience to ask them to delete anything they've inputted previously before
      inputting something else.
    */

    bigInput.value = null;

}

function nasafy(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
    Call the function `clearList`, which we have defined for you.
    */

    clearList();


    // Find the input box the user is typing in and put the DOM node in a variable.
    let nasaInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Save it to a variable.

    let nasaValue = nasaInput.value;
    nasaValue = Number(nasaValue);
    if (nasaValue < 0 || isNaN(nasaValue)) {
        alert(`Please enter a valid number`);
        nasaInput.value = ``;
        return;
    }

    /*
      Print every value from the user's number down to (and including) the number 1. Then print "Blastoff!".
      
      Use the pre-defined `printValue` function below to print out each line,
      giving it the value you want to print.
    */

    let i = nasaValue;
    while (i > 0) {
        printValue(i);
        i--;
    }
    printValue(`BLASTOFF!!!`);

    /*
      Using the variable we saved above for the input box, clear its value.
    */

    nasaInput.value = null;
}

function crazify(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
    Call the function `clearList`, which we have defined for you.
    */
    clearList()

    //Find the input box the user is typing in and put the DOM node in a variable.

    crazyInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Save it to a variable.

    crazyValue = crazyInput.value;

    /*
      TODO: Loop through and capitalize every even-numbered character. That is, if the user's string is 7 characters long, the 2nd, 4th, and 6th characters should all be capitalized.
      
      Hint: you'll probably have to "build" a new string as you loop.
      
      Use the pre-defined `printValue` function below to print out result,
      giving it the value you want to print.
    */

    crazyValue = crazyValue.toLowerCase();
    let evenOdd = false;
    let newCrazy = ``;
    i = 0;
    while (i < crazyValue.length) {
        if (crazyValue[i] !== ` `) {
            if (evenOdd === true) {
                newCrazy += crazyValue[i].toUpperCase();
                evenOdd = !evenOdd;
            } else if (evenOdd === false) {
                newCrazy += crazyValue[i];
                evenOdd = !evenOdd;
            }
        }
        if (crazyValue[i] === ` `) {
            newCrazy += crazyValue[i];
        }
        i++;
    }
    printValue(newCrazy);
    crazyInput.value = null;
}

/*
  * If you haven't already, make sure capitalized user inputs get crazified too. "BANANA" crazified should be "bAnAnA", not "BANANA"!
  * Only count the characters that are in the alphabet when you're considering what to capitalize. Without this adjustment, "hey you" comes out as "hEy yOu", with the space "capitalized" (whatever that means!). Make it result in "hEy YoU" instead!
*/



/*
Using the variable we saved above for the input box, clear its value.
*/



function reverse(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
    Call the function `clearList`, which we have defined for you.
    */

    clearList();

    // Find the input box the user is typing in and put the DOM node in a variable.

    let revInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Save it to a variable.

    let revValue = revInput.value;

    /*
      Print out the string, but in reverse. Do _not_ print out each character from the string individually; this would be pretty weird behavior when someone wants to see the reversed string of what they typed in!
      
      Use the pre-defined `printValue` function below to print out the result,
      giving it the value you want to print.
      Guidelines: 
      * You will find solutions on the internet that involve using `split` to make the string into an array. This is _not_ the correct solution for this exercise! Besides being incredibly inefficient (although this is a matter of principle more than app speed), this solution would teach you nothing about how to iterate over strings--and probably nothing about iterating over arrays either, since we don't have the foundational knowledge of arrays yet.
      * To get a complete string, we'll have to build a new string entirely.
      * It would probably _not_ make sense to go through the user input string in regular, 0 to sring.length order.
        
    */

    let revStr = ``;
    i = (revValue.length - 1);
    while (i >= 0) {
        revStr += revValue[i];
        i--;
    }
    printValue(revStr);

    /*
      Using the variable we saved above for the input box, clear its value.
    */
    revInput.value = null;
}

function luckify(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
      Call the function `clearList`, which we have defined for you.
    */

    clearList();

    // Find the input box the user is typing in and put the DOM node in a variable.

    let luckyInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Make sure it's a
    // number, not a string. Save it to a variable.

    let luckyValue = luckyInput.value;
    luckyValue = Number(luckyValue);
    if (luckyValue < 5 || isNaN(luckyValue)) {
        alert(`Please input a number great than 5`);
        luckyInput.value = null;
        return;
    }

    /*
      Print out 5 "lucky numbers" (random integers) from 1 to the number they typed in.
      Use the pre-defined `printValue` function below to print out each line,
      giving it the value you want to print.
    */

    i = 0;
    let x = -1;
    let luckyNum = 0;
    let findList = document.querySelector('.list');
    let listItems = findList.getElementsByTagName('li');

    // -----*****************************-----
    // ----- Look at this solution later -----
    // -----*****************************-----
    // while (i < 5) {
    //   luckyNum = Math.ceil(Math.random() * luckyValue);
    //   while (x < listItems.length) {
    //     while (luckyNum === listItems[i]) {
    //       luckyNum = Math.ceil(Math.random() * luckyValue);
    //     }
    //     x++
    //   }
    //   printValue(luckyNum);
    //   i++;
    // }

    let luckyNum2;
    let luckyNum3;
    let luckyNum4;
    let luckyNum5;
    luckyNum = Math.ceil(Math.random() * luckyValue);
    printValue(luckyNum);
    luckyNum2 = Math.ceil(Math.random() * luckyValue);
    while (luckyNum2 === luckyNum) {
        luckyNum2 = Math.ceil(Math.random() * luckyValue);
    }
    printValue(luckyNum2);
    luckyNum3 = Math.ceil(Math.random() * luckyValue);
    while (luckyNum3 === luckyNum || luckyNum3 === luckyNum2) {
        luckyNum3 = Math.ceil(Math.random() * luckyValue);
    }
    printValue(luckyNum3);
    luckyNum4 = Math.ceil(Math.random() * luckyValue);
    while (luckyNum4 === luckyNum || luckyNum4 === luckyNum2 || luckyNum4 === luckyNum3) {
        luckyNum4 = Math.ceil(Math.random() * luckyValue);
    }
    printValue(luckyNum4);
    luckyNum5 = Math.ceil(Math.random() * luckyValue);
    while (luckyNum5 === luckyNum || luckyNum5 === luckyNum2 || luckyNum5 === luckyNum3 || luckyNum5 === luckyNum4) {
        luckyNum5 = Math.ceil(Math.random() * luckyValue);
    }
    printValue(luckyNum5);



    /*
      Stretch Goal:
      * Make sure that you don't give them the same lucky number more than once. There are a few possible solutions to this, but don't use arrays! We'll get there soon. NOTE: the luckify stretch goals are particularly hard ones, feel free to come back after doing other stretch goals first.
      * If you're preventing them getting the same number, but they type in, say, a 3, your browser will enter an infinite loop, as you can't get 5 numbers from 1-3 without repeating a number. But you _could_ have it simply exit the loop earlier if the user entered a lower number than 5.
      * If you get a lucky number of 15, _some_ solutions to the above will prevent a 1 from coming afterwards, as it will consider the 1 digit in 15 as an instance of 1 having already occurred. (Feel free to test this with 19 as an input, and see if a number with a 1 digit is ever followed by a 1.) One solution to this involves the string method `padStart`... but feel free to find a different way!
    */



    /*
      Stretch goal TODO:
      Using the variable we saved above for the input box, clear its value.
    */
    luckyInput.value = null;
}

function titleify(event) {
    // Make sure the page isn't reloaded when the user submits the form.
    event.preventDefault();

    /*
      Call the function `clearList`, which we have defined for you.
    */

    clearList();

    // Find the input box the user is typing in and put the DOM node in a variable.

    titleInput = document.querySelector('.user-input');

    // Use the variable you saved in the above step to dive deeper into the
    // object and find the value the user has added there. Save it to a variable.

    titleValue = titleInput.value;

    /*
      TODO: Print out the title case version of the string the user inputted.
      Use the pre-defined `printValue` function below to print out the result,
      giving it the value you want to print.
      What's title case? It's the case used for the title of a book or movie. If it's the first letter of a word, you use a capital letter. Otherwise, use lower case.
      True title case keeps lower case for any word that's an article or preposition, but we're _definitely_ not asking that of you!
    */

    titleValue = titleValue.toLowerCase();
    i = 0;
    let titleStr = ``;
    let CapIt = false;
    while (i < titleValue.length) {
        if (titleValue[i] === ` `) {
            CapIt = true;
        }

        if (i === 0) {
            titleStr += titleValue[i].toUpperCase();
        }

        if (i !== 0 && CapIt === false) {
            titleStr += titleValue[i];
        } else if (i !== 0 && CapIt === true) {
            titleStr += titleValue[i].toUpperCase();
            i++;
            titleStr += titleValue[i].toUpperCase();
            CapIt = false;
        }
        i++;
    }
    printValue(titleStr);

    /*
      Stretch goal TODO:
      Using the variable we saved above for the input box, clear its value.
    */
    titleInput.value = null;
}

function clearListField() {
    clearList();
}

