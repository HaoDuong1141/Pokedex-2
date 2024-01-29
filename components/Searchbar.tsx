/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import PokemonDetails from "./PokemonDetails";

const Searchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "",
        species: "",
        imageF: "",
        imageB: "",
        imageFS: "",
        imageBS: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
    });

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
            (res) => {
                console.log(res);
                setPokemon({
                    name: pokemonName,
                    species: res.data.species.name,
                    type: res.data.types[0].type.name,
                    imageF: res.data.sprites.front_default,
                    imageB: res.data.sprites.back_default,
                    imageFS: res.data.sprites.front_shiny,
                    imageBS: res.data.sprites.back_shiny,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    specialAttack: res.data.stats[3].base_stat,
                    specialDefense: res.data.stats[4].base_stat,
                    speed: res.data.stats[5].base_stat,
                });
                setPokemonChosen(true);
            }
        );
    };

    return (
        <div className="flex flex-col justify-center items-center gap-20">
            <div className="flex flex-col justify-center items-center gap-20">
                <h1 className="flex justify-center items-center text-8xl font-bold pt-16">
                    Pokemon Search
                </h1>
                <div className="flex flex-row">
                    <input
                        type="text"
                        placeholder="Enter the Pokemon name"
                        onChange={(e) => {
                            setPokemonName(e.target.value);
                        }}
                        className="h-12 w-96 px-12 text-center text-xl rounded-xl border-2 border-black outline-none font-medium text-black"
                    />
                    <button onClick={searchPokemon}>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="relative -left-8 scale-125"
                        />
                    </button>
                </div>
            </div>
            <div className="">
                {!pokemonChosen ? (
                    <h1 className="text-4xl font-bold">
                        Please choose a Pokemon
                    </h1>
                ) : (
                    <>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex flex-col justify-center items-center border-2 border-black rounded-lg w-[180px] h-[300px] bg-slate-500 hover:scale-105"
                        >
                            <h1 className="text-2xl font-bold capitalize">
                                {pokemon.name}
                            </h1>
                            <img src={pokemon.imageF} className="scale-125" />
                            <h3 className="capitalize">
                                <span className="font-medium">Species: </span>
                                {pokemon.species}
                            </h3>
                            <h3 className="capitalize">
                                <span className="font-medium">Type: </span>
                                {pokemon.type}
                            </h3>
                            <h4>
                                <span className="font-medium">Hp: </span>
                                {pokemon.hp}
                            </h4>
                            <h4>
                                <span className="font-medium">Attack: </span>
                                {pokemon.attack}
                            </h4>
                            <h4>
                                <span className="font-medium">Defense: </span>
                                {pokemon.defense}
                            </h4>
                        </button>
                        {isOpen && (
                            <PokemonDetails
                                isOpen={isOpen}
                                closeModal={() => setIsOpen(false)}
                                pokemonImgF={pokemon.imageF}
                                pokemonImgB={pokemon.imageB}
                                pokemonImgFS={pokemon.imageFS}
                                pokemonImgBS={pokemon.imageBS}
                                pokemonName={pokemon.name}
                                pokemonSpecies={pokemon.species}
                                pokemonType={pokemon.type}
                                pokemonHp={pokemon.hp}
                                pokemonAttack={pokemon.attack}
                                pokemonDefense={pokemon.defense}
                                pokemonSpecialAttack={pokemon.specialAttack}
                                pokemonSpecialDefense={pokemon.specialDefense}
                                pokemonSpeed={pokemon.speed}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Searchbar;
