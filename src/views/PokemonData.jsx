import React, { useEffect, useState } from 'react';

export default function PokemonData() {

    const [pokemonData, setPokemonData] = useState(null);
    const pokemonName = 'pikachu';

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPokemonData(data);
                })
    }, [pokemonName]);

    const tableHeaders = ["#", 'Name', 'Height', 'Weight'];

    const handleFormSubmit = event => {
        event.preventDefault();
        let pokemon = event.target.pokemon.value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setPokemonData(data);
          });
        event.target.pokemon.value = '';
      };

    return (
        <div>
            <h1>Pokemon Lookup</h1>

            <form action="" className='row my-3' onSubmit={handleFormSubmit}>
                <div className="col-12 col-md-7">
                    <input type="text" name="pokemon" className="form-control" placeholder='Enter Pokemon Name e.g. Charizard'/>
                </div>
                <div className="col">
                    <input type="submit" value="Search" className="btn btn-success w-100" />
                </div>
            </form>
            
            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map((header) => (<th key={header}>{header}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {pokemonData && (
                        <tr>
                        <th>{pokemonData.id}</th>
                        <th>{pokemonData.name}</th>
                        <th>{pokemonData.height}</th>
                        <th>{pokemonData.weight}</th>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}
