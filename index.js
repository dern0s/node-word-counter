const process = require('process');

let content = process.argv[2];

let firstText = content.split(" ");

let vocabulary = [...new Set(firstText)];

let bow = [];

let ocurrences = 0;
for (element in vocabulary){
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