<template>
  <section v-if="false" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemones</h3>
  </section>

  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mb-10">Quien es este pokemon?</h1>

    <PokemonPicture />

    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
  import PokemonOptions from "../components/PokemonOptions.vue"
  import PokemonPicture from "../components/PokemonPicture.vue"
</script>
