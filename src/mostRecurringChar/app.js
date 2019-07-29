
let text = "Kenny";
let charMap = {};

for(let char of text){
    if(charMap.hasOwnProperty(char)){
        charMap[char]++
    }else{
        charMap[char] = 1;
    }
}

console.log(charMap);

/*
Using for in Method
 */