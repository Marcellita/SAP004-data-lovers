import { filterData, orderPokedex, orderData, calcType } from '../src/data.js';
import { Bulbasaur, Ivysaur, Charmander, Charmeleon, myPokemons } from '../test/mockPokemon.js'

describe('filterData', () => {

  it('should be a function', () => {
    expect(typeof filterData).toBe('function');
  })
  it('return filter of type', () => {
    const typeFilter = "Poison";
    const allPokemons = myPokemons.pokemon;
    expect(filterData(typeFilter, allPokemons)).toEqual([Bulbasaur, Ivysaur])
  })
})

describe('orderData', () => {
  it('should be a function', () => {
    expect(typeof orderData).toBe('function');
  })
  it('return order alfabetic A-Z ', () => {
    const myPokemon = myPokemons.pokemon;
    const name = myPokemons.pokemon.name;
    const alfaOrder = "az";
    expect(orderData(myPokemon, name, alfaOrder)).toEqual([Bulbasaur, Charmander, Charmeleon, Ivysaur]);
  });
  it('return order alfabetic Z-A', () => {
    const myPokemon = myPokemons.pokemon;
    const name = myPokemons.pokemon.name;
    const alfaOrder = "za";
    expect(orderData(myPokemon, name, alfaOrder)).toEqual([Ivysaur, Charmeleon, Charmander, Bulbasaur]);
  });
})
<<<<<<< HEAD

describe('orderPokedex', () => {

  it('should be a function', () => {
    expect(typeof orderPokedex).toBe('function');
  })
  it('return order by id', () => {
    const myPokemon = myPokemons.pokemon;
    const id = myPokemons.pokemon.id;
    const alfaOrder = "pokedex";
    expect(orderPokedex(myPokemon, id, alfaOrder)).toEqual([Bulbasaur, Ivysaur, Charmander, Charmeleon])
  })
})

describe('calcType', () => {
  it('should be a function', () => {
    expect(typeof calcType).toBe('function');
  })
  it('return calculation of type', () => {
    const filterPokemon = 2;
    const allPokemon = myPokemons.pokemon.length;
    expect(calcType(filterPokemon, allPokemon)).toBe(50)
  })
})

=======
>>>>>>> 00e7483b488c4fa7a44ea7e56ef24cb2928a4d95

describe('orderPokedex', () => {

<<<<<<< HEAD

=======
  it('should be a function', () => {
    expect(typeof orderPokedex).toBe('function');
  })
  it('return order by id', () => {
    const myPokemon = myPokemons.pokemon;
    const id = myPokemons.pokemon.id;
    const alfaOrder = "pokedex";
    expect(orderPokedex(myPokemon, id, alfaOrder)).toEqual([Bulbasaur, Ivysaur, Charmander, Charmeleon])
  })
})

describe('calcType', () => {
  it('should be a function', () => {
    expect(typeof calcType).toBe('function');
  })
  it('return calculation of type', () => {
    const filterPokemon = 2;
    const allPokemon = myPokemons.pokemon.length;
    expect(calcType(filterPokemon, allPokemon)).toBe(50)
  })
})
>>>>>>> 00e7483b488c4fa7a44ea7e56ef24cb2928a4d95
