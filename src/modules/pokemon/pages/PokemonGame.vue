<template>
  <section
    v-if="isLoading || randomPokemon?.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemones</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mb-10">Quien es este pokemon?</h1>

    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.PLAYING"
        @click="getNextOptions(4)"
        class="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
      >
        ¿Jugar de nuevo?
      </button>
    </div>

    <PokemonPicture
      :pokemon-id="randomPokemon?.id!"
      :show-pokemon="gameStatus !== GameStatus.PLAYING"
    />

    <PokemonOptions
      :options="pokemonsOptions"
      @selected-option="checkAnswer"
      :correct-answer="randomPokemon?.id!"
      :block-selection="gameStatus !== GameStatus.PLAYING"
    />
  </section>
</template>

<script setup lang="ts">
  import PokemonOptions from "../components/PokemonOptions.vue";
  import PokemonPicture from "../components/PokemonPicture.vue";
  import { usePokemonGame } from "../composables/usePokemonGame.ts";
  import { GameStatus } from "../interfaces/game-status.enum.ts";

  const { gameStatus, randomPokemon, isLoading, pokemonsOptions, checkAnswer, getNextOptions } =
    usePokemonGame();
</script>
