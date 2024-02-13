
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(dc_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros);
// console.log(typeof (marvel_heros));

// ways to merge two arrays into one
//1
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

//2
// const all_new_heros = [...marvel_heros, ...dc_heros]
// const all_new_heros = [...dc_heros, ...marvel_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity);
const real_another_array = another_array.flat(5);

// const real_another_array = another_array.flat(3);
// console.log(real_another_array);

console.log(Array.isArray("Mujaheed"))

// console.log(Array.from({name: "Mujaheed"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



