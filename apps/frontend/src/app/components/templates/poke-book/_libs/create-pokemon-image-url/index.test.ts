import { describe, expect, it } from 'vitest';

import { createPokemonImageUrl } from '.';
import { POKEMON_IMAGE_BASE_PATH } from './constants';

describe('createPokemonImageUrl', () => {
  it('should generate correct image URL for given Pokémon ID', () => {
    const id = 25;
    const expectedUrl = `${POKEMON_IMAGE_BASE_PATH}/${id}.png`;
    expect(createPokemonImageUrl(id)).toBe(expectedUrl);
  });

  it('should handle single digit Pokémon ID', () => {
    const id = 7;
    const expectedUrl = `${POKEMON_IMAGE_BASE_PATH}/${id}.png`;
    expect(createPokemonImageUrl(id)).toBe(expectedUrl);
  });

  it('should handle triple digit Pokémon ID', () => {
    const id = 150;
    const expectedUrl = `${POKEMON_IMAGE_BASE_PATH}/${id}.png`;
    expect(createPokemonImageUrl(id)).toBe(expectedUrl);
  });
});
