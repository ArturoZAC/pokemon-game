import { computed, onMounted, ref } from "vue";
import { GameStatus } from "../interfaces/game-status.enum";
import pokemonApi from "../api/pokemon.api";
import type { PokemonListResponse } from "../interfaces/pokemon-list.response";
import type { Pokemon } from "../interfaces/pokemon.interface";

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.PLAYING);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);
  const isLoading = computed(() => pokemons.value.length === 0);

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>("/?limit=151");

    const pokemonArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split("/");
      const id = urlParts.at(-2) ?? 0;
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    // return pokemonArray
    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const getNextOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.PLAYING;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  onMounted(() => {
    // onMounted( async() => {
    // const pokemons =  await getPokemons()
    getPokemons().then((data) => {
      pokemons.value = data;
    });

    getNextOptions();
  });

  return { gameStatus, isLoading };
};
