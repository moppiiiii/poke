import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NamedAPIResource {
  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType()
export class Name {
  @Field()
  name: string;

  @Field(() => NamedAPIResource)
  language: NamedAPIResource;
}

@ObjectType()
export class VerboseEffect {
  @Field()
  effect: string;

  @Field()
  short_effect: string;

  @Field(() => NamedAPIResource)
  language: NamedAPIResource;
}

@ObjectType()
export class AbilityEffectChange {
  @Field(() => [VerboseEffect])
  effect_entries: VerboseEffect[];

  @Field(() => NamedAPIResource)
  version_group: NamedAPIResource;
}

@ObjectType()
export class AbilityFlavorText {
  @Field()
  flavor_text: string;

  @Field(() => NamedAPIResource)
  language: NamedAPIResource;

  @Field(() => NamedAPIResource)
  version_group: NamedAPIResource;
}

@ObjectType()
export class AbilityPokemon {
  @Field()
  is_hidden: boolean;

  @Field(() => Int)
  slot: number;

  @Field(() => NamedAPIResource)
  pokemon: NamedAPIResource;
}

@ObjectType()
export class Ability {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  is_main_series: boolean;

  @Field(() => NamedAPIResource)
  generation: NamedAPIResource;

  @Field(() => [Name])
  names: Name[];

  @Field(() => [VerboseEffect])
  effect_entries: VerboseEffect[];

  @Field(() => [AbilityEffectChange])
  effect_changes: AbilityEffectChange[];

  @Field(() => [AbilityFlavorText])
  flavor_text_entries: AbilityFlavorText[];

  @Field(() => [AbilityPokemon])
  pokemon: AbilityPokemon[];
}

@ObjectType()
export class GameIndex {
  @Field(() => Int)
  game_index: number;

  @Field(() => NamedAPIResource)
  version: NamedAPIResource;
}

@ObjectType()
export class VersionDetail {
  @Field(() => Int)
  rarity: number;

  @Field(() => NamedAPIResource)
  version: NamedAPIResource;
}

@ObjectType()
export class HeldItem {
  @Field(() => NamedAPIResource)
  item: NamedAPIResource;

  @Field(() => [VersionDetail])
  version_details: VersionDetail[];
}

@ObjectType()
export class VersionGroupDetail {
  @Field(() => Int)
  level_learned_at: number;

  @Field(() => NamedAPIResource)
  version_group: NamedAPIResource;

  @Field(() => NamedAPIResource)
  move_learn_method: NamedAPIResource;
}

@ObjectType()
export class Move {
  @Field(() => NamedAPIResource)
  move: NamedAPIResource;

  @Field(() => [VersionGroupDetail])
  version_group_details: VersionGroupDetail[];
}

@ObjectType()
export class Sprite {
  @Field()
  front_default: string;

  @Field()
  front_shiny: string;

  @Field({ nullable: true })
  front_female?: string;

  @Field({ nullable: true })
  front_shiny_female?: string;

  @Field()
  back_default: string;

  @Field()
  back_shiny: string;

  @Field({ nullable: true })
  back_female?: string;

  @Field({ nullable: true })
  back_shiny_female?: string;
}

@ObjectType()
export class Stat {
  @Field(() => Int)
  base_stat: number;

  @Field(() => Int)
  effort: number;

  @Field(() => NamedAPIResource)
  stat: NamedAPIResource;
}

@ObjectType()
export class Type {
  @Field(() => Int)
  slot: number;

  @Field(() => NamedAPIResource)
  type: NamedAPIResource;
}

@ObjectType()
export class PokemonList {
  @Field(() => Int)
  count: number;

  @Field(() => String, { nullable: true })
  next: string | null;

  @Field(() => String, { nullable: true })
  previous: string | null;

  @Field(() => [NamedAPIResource])
  results: NamedAPIResource[];
}

@ObjectType()
export class Pokemon {
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

  @Field(() => [NamedAPIResource])
  forms: NamedAPIResource[];

  @Field(() => [GameIndex])
  game_indices: GameIndex[];

  @Field(() => [HeldItem])
  held_items: HeldItem[];

  @Field()
  location_area_encounters: string;

  @Field(() => [Move])
  moves: Move[];

  @Field(() => NamedAPIResource)
  species: NamedAPIResource;

  @Field(() => Sprite)
  sprites: Sprite[];

  @Field(() => [Stat])
  stats: Stat[];

  @Field(() => [Type])
  types: Type[];
}
