import { onMounted, ref } from "vue"
import { GameStatus } from "../interfaces/game-status.enum"
import pokemonApi from "../api/pokemon.api"
import type { PokemonListResponse } from "../interfaces/pokemon-list.response"

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.PLAYING)

  const getPokemons = async () => {
    const response = await pokemonApi.get<PokemonListResponse>("/?limit=151")

    console.log(response.data)
  }

  onMounted(() => {
    getPokemons()
  })

  return { gameStatus }
}
