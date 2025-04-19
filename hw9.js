
// 111111111111111111111111
// function ajirattish(son) {
//   const sonSatr = son.toString();
//   const len = sonSatr.length;

//   const yarmi = Math.floor(len / 2);

//   let chap = sonSatr.slice(0, yarmi);
//   let ong = sonSatr.slice(yarmi);

//   if (len % 2 !== 0) {
//     ong = sonSatr.slice(yarmi);
//   }

//   return [Number(chap), Number(ong)];
// }

// console.log(ajirattish(12));
// console.log(ajirattish(345));
// console.log(ajirattish(7636));

// 22222222222222

// function kuB(arr) {
//     return arr.reduce(function(sum, num) {
//         return sum + Math.pow(num, 3);
//     }, 0);
// }

// console.log(kuB([5,6,7]));

// 33333333333333333



// function minMax(son) {
//     let kichik = Math.min(...son);
//     let katta = Math.max(...son);
//     return [kichik, katta];
    
// }
// let son = ([1, 2, 3, 4, 5, 5, 6]);
// let son2 = ([4,2,6,77,44,55,33]);

// console.log(minMax(son));
// console.log(minMax(son2));

// 4444444444444

// function birinchoiToq(son) {
    
// }

// 44444444444444

// function birinchiToq(son) {
//     for (let i = 0; i < son.length; i++) {
//         if (son[i] % 2 !== 0) {
//             return son[i];
//         };
//     };

//     return undefined;
// }
// console.log(birinchiToq([2, 4, 6, 7, 8]));
// console.log(birinchiToq([2, 4, 6]));
// console.log(birinchiToq([1, 2, 3, 4, 5]));


// 5555555555

// function kopaytma(son) {
//     let num1 = son[0];
//     let num2 = son[1];
//     let natija = 0;

//     for (let i = 0; i < num2; i++){
//         natija += num1;
        
//     }
//     return natija;
// }
// console.log(kopaytma([3, 5]));



// 66666666666666666

// function kichikUnli(str) {
//     const unlilar = "aeiou";
//     let natija = [];
//     for (let i = 0; i < str.length; i++){
//         const harf = str[i];
//         if (unlilar.indexOf(harf) !== -1) {
//             natija.push(harf);
//         }
//     }
//     return natija;
// }

// console.log(kichikUnli("assalom adunyooo"));


// 7777777777777777

// function raqamlarTel(son) {

//   const kod = son.slice(0, 3).join('');
//   const boshi = son.slice(3, 6).join('');
//   const ortasi = son.slice(6,8).join('');
//   const qolgani = son.slice(8,10).join('');

//   return `(${kod}) ${boshi}-${ortasi}-${qolgani}`;
// }

// console.log(raqamlarTel([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(raqamlarTel([5, 5, 5, 1, 2, 3, 4, 5, 6, 7]));



// 88888888888888888888


// function sozQosh(soz) {
//   let sozlar = "";
//   let natija = [];

//   for (let i = 0; i < soz.length; i++) {
//     sozlar += soz[i];
//     natija.push(sozlar);
//   }

//   return natija.join("-");
// }

// console.log(sozQosh("salom"));
// console.log(sozQosh("olma"));
// console.log(sozQosh("kitob"));

// 10   10     10    10

function trueQiymat(box) {
  return box.filter(val => val === true).length;
}

console.log(trueQiymat([true, false, true, true, false])); 

