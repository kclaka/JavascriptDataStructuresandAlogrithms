const reverseString = function (text) {
    //return text.split("").reverse().join("")
    return [...text].reverse().join("")
};

console.log(reverseString("KENNY"));

/*
Using For Loops
 */

const reverseStringUsingForLoop = function (text) {
    let result = "";
    /*for(let i = text.length - 1; i >= 0; i--){
        result += text[i];
    }*/

    for(let char of text){
        result = char + result;
    }

    return result;
};

console.log(reverseStringUsingForLoop("Dance"));

const reverseStringSubStr = function (text) {
    if(text === ""){
        return ""
    }else{
        return reverseStringSubStr(text.substr(1)) + text[0]
    }
};


const reverseStringusingReduce = function (text) {
    return [...text].reduce((acc, char) => char + acc, "")
};

