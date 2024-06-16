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

/**
 * Function to generate paths for Pokémon attribute images
 * @param type string
 * @returns Pokémon type image path
 */
export const createPokemonTypeImagePath = (type: string) => {
  switch (type) {
    case 'bug':
      return BugImage as string;
    case 'dark':
      return DarkImage as string;
    case 'dragon':
      return DragonImage as string;
    case 'electric':
      return ElectricImage as string;
    case 'fairy':
      return FairyImage as string;
    case 'fighting':
      return FightingImage as string;
    case 'fire':
      return FireImage as string;
    case 'flying':
      return FlyingImage as string;
    case 'ghost':
      return GhostImage as string;
    case 'grass':
      return GrassImage as string;
    case 'ground':
      return GroundImage as string;
    case 'ice':
      return IceImage as string;
    case 'normal':
      return NormalImage as string;
    case 'poison':
      return PoisonImage as string;
    case 'psychic':
      return PsychicImage as string;
    case 'rock':
      return RockImage as string;
    case 'steel':
      return SteelImage as string;
    case 'water':
      return WaterImage as string;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};
