import { filterData, orderPokedex } from '../src/data.js';
import { Bulbasaur, Ivysaur, Charmander, Charmeleon, myPokemons } from '../test/mockPokemon.js'

describe('filterData', () => {

  it('should be a function', () => {
    expect(typeof filterData).toBe('function');
  })
  it('return filter type', () => {
    const typeFilter = "Poison";
    const allPokemons = myPokemons.pokemon;
    expect(filterData(typeFilter, allPokemons)).toEqual([Bulbasaur, Ivysaur]);
  });
})

describe('orderPokedex', () => {

  it('should be a function', () => {
    expect(typeof orderPokedex).toBe('function');
  })
  it('return order by id', () => {
    const myPokemon = myPokemons.pokemon;
    const id = myPokemons.pokemon.id;
    const alfaOrder = "pokedex"
    expect(orderPokedex(myPokemon, id, alfaOrder)).toEqual([Bulbasaur, Ivysaur, Charmander, Charmeleon]);
  });
})


// describe('calcType', () => {
//   it('should be a function', () => {
//     expect(typeof calcType).toBe('function');
//   })
//   it('return calculation of type', () => {
//     const filterPokemon = 2;
//     const allPokemon = myPokemons.length;
//     expect(calcType(filterPokemon, allPokemon)).toBe(50);
//   });
// });


// describe('orderData', () => {

//   it('should be a function', () => {
//     expect(typeof orderData).toBe('function');
//   })
//   it('return order alfabetic', () => {
//    const myPokemon = myPokemons.pokemon;
//    const name = myPokemons.pokemon.name;
//    const alfabeticOrder = "az"
//     expect(orderData(myPokemon, name, alfabeticOrder)).toEqual([Bulbasaur, Charmander, Charmeleon, Ivysaur]);
//   });
// })





