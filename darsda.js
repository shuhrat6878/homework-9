
// let arr = [1, 2, 3, 4, 5, -1, 6, 7, 8, 912];


// // 11111111
// let son = arr.some((val) => val > 10);
// console.log(son);



// // 22222222
// let son2 = arr.every((val) => val > 0);
// console.log(son2);


// // 333333333333
// let arr2 = [1, [2, 3], [4, [5]]]
// // 333333333333
// let tekis = arr2.flat(Infinity);
// console.log(tekis);

// function flat(arr, res = []) {
//     arr.forEach(val => {
//         if (!Array.isArray(val)) {
//             res.push(val);
//         } else {
//             return flat(val, res);
//         }
//     });
//     return res;
// }
// console.log(flat(arr2));

// // 44444444444444


const praducts = [
    { name: "non", category: "oziq-ovqat" },
    { name: "telefon", category: "texnika" },
    { name: "sut", category: "oziq-ovqat" },
    { name: "televizor", category: "texnika" },
];

let obj = {};
function guroupBy(praducts) {
    praducts.forEach((val) => {
        obj[val.category] = obj[val.category]
            ? obj[val.category].concat([{ name: val.name }])
            : [];
    });
    console.log(obj);
    
}
guroupBy(praducts);