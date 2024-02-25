//?? Cara 1
// function grow(x) {
//   // ! ambil index pertama
//   let result = x[0];
//   // ! loopig array sebanyak jumlah array
//   for (let i = 1; i < x.length; i++) {
//     // ! kali-kan result dengan index setelahnya
//     result *= x[i];
//   }

//   return result;
// }

//?? Cara 2
// function grow(x) {
//   return (result = x.reduce((acc, curr) => acc * curr, 1));
//   // nilai default acc = 1
//   // curr = index array
//   // setelah di operasikan maka nilai akan di looping sebanyak index
// }

// // ?? function expresion arrow
// const grow = (x) => (result = x.reduce((acc, curr) => acc * curr));

// ?? nemu di codewars hehe
// const grow = (x) => eval(x.join("*"));
console.log(grow([2, 2, 2, 2, 2, 2]));
