const vowelCounter = function (text) {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for(let letter of text.toLowerCase()){
        if(vowels.includes(letter)){
            counter++;
        }
    }

    return counter;
};

console.log(vowelCounter("I am a boy"));

/*
Using Regular Expressions
 */

const vowelCounterRegEx = function (text) {
    let matchingInstances = text.match(/[aeiou]/gi);

    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0;
    }

};

console.log(vowelCounterRegEx("Hi This is Me, I am American"));