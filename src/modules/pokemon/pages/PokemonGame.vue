<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemones</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mb-10">Quien es este pokemon?</h1>
    <h1 class="mb-10">{{ randomPokemon }}</h1>

    <PokemonPicture :pokemon-id="randomPokemon?.id!" />

    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
  import PokemonOptions from "../components/PokemonOptions.vue";
  import PokemonPicture from "../components/PokemonPicture.vue";
  import { usePokemonGame } from "../composables/usePokemonGame.ts";

  const { gameStatus, randomPokemon, isLoading } = usePokemonGame();
</script>
