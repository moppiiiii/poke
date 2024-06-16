import { POKEMON_IMAGE_BASE_PATH } from './constants';

/**
 * Function to generate Pokémon image URL from Pokémon ID
 * @param id number
 * @returns Pokémon image URL
 */
export const createPokemonImageUrl = (id: number) => {
  return `${POKEMON_IMAGE_BASE_PATH}/${id}.png`;
};
