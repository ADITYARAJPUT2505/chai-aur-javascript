const marvel_heroes=['thor','ironman','hulk']
const dc_heroes=['superrman','flash','batman']

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes)
//console.log(marvel_heroes[3][2])

//const all_heroes=marvel_heroes.concat(dc_heroes)
//console.log(all_heroes)
//console.log(marvel_heroes+dc_heroes)

const all_new_heroes=[...marvel_heroes, ...dc_heroes]
//console.log(all_new_heroes)

const another_array = [2,4,2,[4,[1,4],4],5]
let real_another_array = another_array.flat(Infinity)
//console.log(another_array)
//console.log(real_another_array)