/**
 * return Pokémon id from poke api
 * @param url poke api url
 * @returns id
 */
export const getPokemonId = (url: string) => {
  const parts = url.split('/').filter((part) => part !== '');
  return parseInt(parts[parts.length - 1], 10);
};
