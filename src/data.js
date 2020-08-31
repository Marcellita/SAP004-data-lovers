export const filterData = (typeFilter, allPokemons) => {
    let filteredPokemons = allPokemons.filter((pokemon) => {
        if (pokemon.type.includes(typeFilter))
            return pokemon;
    })
    return filteredPokemons;
}
<<<<<<< HEAD


export const orderData = (myPokemon, name, alfaOrder) => {
    const direction = (alfaOrder === "az") ? 1 : -1;
    return myPokemon.sort((a, b) => {
        if (b.name < a.name) {
            return direction;
        } else {
            return -direction;
        }
    })
}

export const orderPokedex = (myPokemon, id, alfaOrder) => {
    if (alfaOrder == "pokedex") {
        return myPokemon.sort((a, b) => {
            if (b.id < a.id) {
                return 1;
            } else {
                return -1;
            }
        })
    }
}

export const calcType = (filterPokemon, allPokemon) => {
    let percentage = filterPokemon * 100 / allPokemon;
    return percentage;
}


=======


export const orderData = (myPokemon, name, alfaOrder) => {
    const direction = (alfaOrder === "az") ? 1 : -1;
    return myPokemon.sort((a, b) => {
        if (b.name < a.name) {
            return direction;
        } else {
            return -direction;
        }
    })
}
>>>>>>> 00e7483b488c4fa7a44ea7e56ef24cb2928a4d95

export const orderPokedex = (myPokemon, id, alfaOrder) => {
    if (alfaOrder == "pokedex") {
        return myPokemon.sort((a, b) => {
            if (b.id < a.id) {
                return 1;
            } else {
                return -1;
            }
        })
    }
}

export const calcType = (filterPokemon, allPokemon) => {
    let percentage = filterPokemon * 100 / allPokemon;
    return percentage;
}