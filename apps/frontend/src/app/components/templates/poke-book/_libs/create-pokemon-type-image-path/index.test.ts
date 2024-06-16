import { describe, expect, it } from 'vitest';

import BugImage from '@/assets/images/type_bug.webp';
import DarkImage from '@/assets/images/type_dark.webp';
import DragonImage from '@/assets/images/type_dragon.webp';
import ElectricImage from '@/assets/images/type_electric.webp';
import FairyImage from '@/assets/images/type_fairy.webp';
import FightingImage from '@/assets/images/type_fighting.webp';
import FireImage from '@/assets/images/type_fire.webp';
import FlyingImage from '@/assets/images/type_flying.webp';
import GhostImage from '@/assets/images/type_ghost.webp';
import GrassImage from '@/assets/images/type_grass.webp';
import GroundImage from '@/assets/images/type_ground.webp';
import IceImage from '@/assets/images/type_ice.webp';
import NormalImage from '@/assets/images/type_normal.webp';
import PoisonImage from '@/assets/images/type_poison.webp';
import PsychicImage from '@/assets/images/type_psychic.webp';
import RockImage from '@/assets/images/type_rock.webp';
import SteelImage from '@/assets/images/type_steel.webp';
import WaterImage from '@/assets/images/type_water.webp';

import { createPokemonTypeImagePath } from './';

describe('createPokemonTypeImagePath', () => {
  it('should return the correct image path for each type', () => {
    expect(createPokemonTypeImagePath('bug')).toBe(BugImage);
    expect(createPokemonTypeImagePath('dark')).toBe(DarkImage);
    expect(createPokemonTypeImagePath('dragon')).toBe(DragonImage);
    expect(createPokemonTypeImagePath('electric')).toBe(ElectricImage);
    expect(createPokemonTypeImagePath('fairy')).toBe(FairyImage);
    expect(createPokemonTypeImagePath('fighting')).toBe(FightingImage);
    expect(createPokemonTypeImagePath('fire')).toBe(FireImage);
    expect(createPokemonTypeImagePath('flying')).toBe(FlyingImage);
    expect(createPokemonTypeImagePath('ghost')).toBe(GhostImage);
    expect(createPokemonTypeImagePath('grass')).toBe(GrassImage);
    expect(createPokemonTypeImagePath('ground')).toBe(GroundImage);
    expect(createPokemonTypeImagePath('ice')).toBe(IceImage);
    expect(createPokemonTypeImagePath('normal')).toBe(NormalImage);
    expect(createPokemonTypeImagePath('poison')).toBe(PoisonImage);
    expect(createPokemonTypeImagePath('psychic')).toBe(PsychicImage);
    expect(createPokemonTypeImagePath('rock')).toBe(RockImage);
    expect(createPokemonTypeImagePath('steel')).toBe(SteelImage);
    expect(createPokemonTypeImagePath('water')).toBe(WaterImage);
  });

  it('should throw an error for unknown type', () => {
    expect(() => createPokemonTypeImagePath('unknown')).toThrow('Unknown type: unknown');
  });
});
