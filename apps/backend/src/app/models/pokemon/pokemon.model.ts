import { Field, Int, ObjectType } from '@nestjs/graphql';

import { NamedAPIResource } from '../common/named-api-resource.model';

@ObjectType()
export class PokemonResource {
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
}
