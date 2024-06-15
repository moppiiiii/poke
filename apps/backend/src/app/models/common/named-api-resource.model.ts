import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NamedAPIResource {
  @Field(() => String)
  name: string;

  @Field(() => String)
  url: string;
}
