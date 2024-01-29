/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface PokemonDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    pokemonImgF?: any;
    pokemonImgB?: any;
    pokemonImgFS?: any;
    pokemonImgBS?: any;
    pokemonName?: any;
    pokemonSpecies?: any;
    pokemonType?: any;
    pokemonHp?: any;
    pokemonAttack?: any;
    pokemonDefense?: any;
    pokemonSpecialAttack?: any;
    pokemonSpecialDefense?: any;
    pokemonSpeed?: any;
}

const PokemonDetails = ({
    isOpen,
    closeModal,
    pokemonImgF,
    pokemonImgB,
    pokemonImgFS,
    pokemonImgBS,
    pokemonName,
    pokemonSpecies,
    pokemonType,
    pokemonHp,
    pokemonAttack,
    pokemonDefense,
    pokemonSpecialAttack,
    pokemonSpecialDefense,
    pokemonSpeed,
}: PokemonDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opactiy-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow y-auto">
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opactiy-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="flex flex-col relative w-full max-w-lg max-h-[90vh] overflow-y-auto 
                                    transform rounded-2xl bg-white shadow-xl transition-all"
                                >
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </button>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <div className="flex flex-col items-center justify-center bg-slate-600 relative w-full h-40 bg-cover bg-center">
                                            <h1 className="text-5xl font-bold capitalize pt-8">
                                                {pokemonName}
                                            </h1>
                                            <img
                                                src={pokemonImgF}
                                                className="scale-150 pt-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-row justify-evenly items-center bg-slate-600 ">
                                        <img src={pokemonImgF} className="" />
                                        <img src={pokemonImgB} className="" />
                                        <img src={pokemonImgFS} className="" />
                                        <img src={pokemonImgBS} className="" />
                                    </div>

                                    <div className="flex flex-1 flex-col gap-2 items-center py-8 text-xl">
                                        <h3 className="capitalize">
                                            <span className="font-medium">
                                                Species:{" "}
                                            </span>
                                            {pokemonSpecies}
                                        </h3>
                                        <h3 className="capitalize">
                                            <span className="font-medium">
                                                Type:{" "}
                                            </span>
                                            {pokemonType}
                                        </h3>
                                        <h4>
                                            <span className="font-medium">
                                                Hp:{" "}
                                            </span>
                                            {pokemonHp}
                                        </h4>
                                        <h4>
                                            <span className="font-medium">
                                                Attack:{" "}
                                            </span>
                                            {pokemonAttack}
                                        </h4>
                                        <h4>
                                            <span className="font-medium">
                                                Defense:{" "}
                                            </span>
                                            {pokemonDefense}
                                        </h4>
                                        <h4>
                                            <span className="font-medium">
                                                Special Attack:{" "}
                                            </span>
                                            {pokemonSpecialAttack}
                                        </h4>
                                        <h4>
                                            <span className="font-medium">
                                                Special Defense:{" "}
                                            </span>
                                            {pokemonSpecialDefense}
                                        </h4>
                                        <h4>
                                            <span className="font-medium">
                                                Speed:{" "}
                                            </span>
                                            {pokemonSpeed}
                                        </h4>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default PokemonDetails;
