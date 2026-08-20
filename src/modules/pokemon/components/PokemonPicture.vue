<template>
  <section>
    <img :src="pokemonImage" class="brightness-0 h-50 select-none" />
  </section>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    pokemonId: number;
  }

  const props = defineProps<Props>();

  const pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
  );
</script>

<style scoped>
  img {
    --moz-user-select: none;
    --ms-user-select: none;
    --webkit-user-drag: none;
    --webkit-user-select: none;
  }
</style>
