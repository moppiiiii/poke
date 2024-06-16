import { describe, expect, it } from 'vitest';

import { calcPokemonBodySize } from '.';

describe('calcPokemonBodySize', () => {
  it('should convert size in decimeters to meters correctly', () => {
    const sizeInDecimeters = 100;
    const expectedSizeInMeters = 10;
    expect(calcPokemonBodySize(sizeInDecimeters)).toBe(expectedSizeInMeters);
  });

  it('should handle zero size', () => {
    const sizeInDecimeters = 0;
    const expectedSizeInMeters = 0;
    expect(calcPokemonBodySize(sizeInDecimeters)).toBe(expectedSizeInMeters);
  });

  it('should handle fractional sizes correctly', () => {
    const sizeInDecimeters = 25;
    const expectedSizeInMeters = 2.5;
    expect(calcPokemonBodySize(sizeInDecimeters)).toBe(expectedSizeInMeters);
  });

  it('should handle very small sizes correctly', () => {
    const sizeInDecimeters = 1;
    const expectedSizeInMeters = 0.1;
    expect(calcPokemonBodySize(sizeInDecimeters)).toBe(expectedSizeInMeters);
  });

  it('should handle large sizes correctly', () => {
    const sizeInDecimeters = 1000;
    const expectedSizeInMeters = 100;
    expect(calcPokemonBodySize(sizeInDecimeters)).toBe(expectedSizeInMeters);
  });
});
