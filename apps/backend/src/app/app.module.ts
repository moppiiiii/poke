import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonResolver } from './resolvers/pokemon/pokemon.resolver';
import { UserResolver } from './resolvers/user/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../schema.gql',
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, PokemonResolver],
})

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
