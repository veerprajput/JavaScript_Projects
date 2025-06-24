const findMax =  (array) => {
    let anotherArray = [];
    anotherArray.push(Math.max(...array));
    anotherArray.push(Math.min(...array));
    return anotherArray;
};


const list = [1, 32, 4, 33, 6, 42];
const list2 = [];

console.log(list.filter((v, i, list) => v > 5));
list.map((v, i, list) => {
    let vObj = {num: v};
    list2.push(vObj);
});

console.log(list2);
console.log(list.reduce((pV, cV, cI, list) => {
    return pV * cV
}, 1));

const [maximum, minimum] = findMax(list);
console.log(maximum);
console.log(minimum);