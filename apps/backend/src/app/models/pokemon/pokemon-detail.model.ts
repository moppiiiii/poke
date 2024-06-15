import { Field, Int, ObjectType } from '@nestjs/graphql';

import { NamedAPIResource } from '../common/named-api-resource.model';

@ObjectType()
class VersionDetail {
  @Field(() => Int)
  rarity: number;

  @Field(() => NamedAPIResource)
  version: NamedAPIResource;
}

@ObjectType()
class HeldItem {
  @Field(() => NamedAPIResource)
  item: NamedAPIResource;

  @Field(() => [VersionDetail])
  version_details: VersionDetail[];
}

@ObjectType()
class VersionGroupDetail {
  @Field(() => Int)
  level_learned_at: number;

  @Field(() => NamedAPIResource)
  move_learn_method: NamedAPIResource;

  @Field(() => NamedAPIResource)
  version_group: NamedAPIResource;
}

@ObjectType()
class Move {
  @Field(() => NamedAPIResource)
  move: NamedAPIResource;

  @Field(() => [VersionGroupDetail])
  version_group_details: VersionGroupDetail[];
}

@ObjectType()
class GameIndex {
  @Field(() => Int)
  game_index: number;

  @Field(() => NamedAPIResource)
  version: NamedAPIResource;
}

@ObjectType()
class Ability {
  @Field(() => NamedAPIResource)
  ability: NamedAPIResource;

  @Field()
  is_hidden: boolean;

  @Field(() => Int)
  slot: number;
}

@ObjectType()
class Form {
  @Field(() => NamedAPIResource)
  form: NamedAPIResource;
}

@ObjectType()
class Stat {
  @Field(() => NamedAPIResource)
  stat: NamedAPIResource;

  @Field(() => Int)
  base_stat: number;

  @Field(() => Int)
  effort: number;
}

@ObjectType()
class Type {
  @Field(() => NamedAPIResource)
  type: NamedAPIResource;

  @Field(() => Int)
  slot: number;
}

@ObjectType()
class PastType {
  @Field(() => NamedAPIResource)
  generation: NamedAPIResource;

  @Field(() => [Type])
  types: Type[];
}

@ObjectType()
class Sprite {
  @Field()
  front_default: string;

  @Field({ nullable: true })
  back_default?: string;

  @Field({ nullable: true })
  front_female?: string;

  @Field({ nullable: true })
  back_female?: string;

  @Field({ nullable: true })
  front_shiny?: string;

  @Field({ nullable: true })
  back_shiny?: string;

  @Field({ nullable: true })
  front_shiny_female?: string;

  @Field({ nullable: true })
  back_shiny_female?: string;
}

@ObjectType()
class OtherSprites {
  @Field(() => Sprite)
  dream_world: Sprite;

  @Field(() => Sprite)
  home: Sprite;

  @Field(() => Sprite)
  official_artwork: Sprite;

  @Field(() => Sprite)
  showdown: Sprite;
}

@ObjectType()
class VersionSprites {
  @Field(() => Sprite)
  red_blue: Sprite;

  @Field(() => Sprite)
  yellow: Sprite;

  @Field(() => Sprite)
  crystal: Sprite;

  @Field(() => Sprite)
  gold: Sprite;

  @Field(() => Sprite)
  silver: Sprite;

  @Field(() => Sprite)
  emerald: Sprite;

  @Field(() => Sprite)
  firered_leafgreen: Sprite;

  @Field(() => Sprite)
  ruby_sapphire: Sprite;

  @Field(() => Sprite)
  diamond_pearl: Sprite;

  @Field(() => Sprite)
  heartgold_soulsilver: Sprite;

  @Field(() => Sprite)
  platinum: Sprite;

  @Field(() => Sprite)
  black_white: Sprite;

  @Field(() => Sprite)
  omegaruby_alphasapphire: Sprite;

  @Field(() => Sprite)
  x_y: Sprite;

  @Field(() => Sprite)
  ultra_sun_ultra_moon: Sprite;

  @Field(() => Sprite)
  icons: Sprite;
}

@ObjectType()
class Sprites {
  @Field()
  back_default: string;

  @Field({ nullable: true })
  back_female?: string;

  @Field({ nullable: true })
  back_shiny?: string;

  @Field({ nullable: true })
  back_shiny_female?: string;

  @Field()
  front_default: string;

  @Field({ nullable: true })
  front_female?: string;

  @Field({ nullable: true })
  front_shiny?: string;

  @Field({ nullable: true })
  front_shiny_female?: string;

  @Field(() => OtherSprites, { nullable: true })
  other?: OtherSprites;

  @Field(() => VersionSprites, { nullable: true })
  versions?: VersionSprites;
}

@ObjectType()
class Cries {
  @Field()
  latest: string;

  @Field()
  legacy: string;
}

@ObjectType()
class PokemonSpecies {
  @Field(() => NamedAPIResource)
  species: NamedAPIResource;
}

@ObjectType()
export class PokemonDetail {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  base_experience: number;

  @Field(() => Int)
  height: number;

  @Field()
  is_default: boolean;

  @Field(() => Int)
  order: number;

  @Field(() => Int)
  weight: number;

  @Field(() => [Ability])
  abilities: Ability[];

  @Field(() => [Form])
  forms: Form[];

  @Field(() => [GameIndex])
  game_indices: GameIndex[];

  @Field(() => [HeldItem])
  held_items: HeldItem[];

  @Field()
  location_area_encounters: string;

  @Field(() => [Move])
  moves: Move[];

  @Field(() => PokemonSpecies)
  species: PokemonSpecies;

  @Field(() => Sprites)
  sprites: Sprites;

  @Field(() => Cries)
  cries: Cries;

  @Field(() => [Stat])
  stats: Stat[];

  @Field(() => [Type])
  types: Type[];

  @Field(() => [PastType])
  past_types: PastType[];
}
