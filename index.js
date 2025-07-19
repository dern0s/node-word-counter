const process = require('process');
//por enquanto esta usando apenas args[2] que eh a primeira frase apos
//chamar o app
let content = process.argv[2];

let firstText = content.split(" ");

let vocabulary = [...new Set(firstText)];

let bow = [];

console.log(`bag is ${firstText}`);
console.log(`vocabulary is ${vocabulary}`);
let ocurrences = 0;
for (element in vocabulary){
    console.log(`element is ${element}`);
    console.log(`vocabulary[element] is ${vocabulary[element]}`);
    ocurrences = 0;
    for (innerElement in firstText){
        if (vocabulary[element] == firstText[innerElement]){
            ocurrences++;
        }
    }
    bow.push({word: vocabulary[element], times: ocurrences});
}

for (item in bow){
    console.log(bow[item]);
}