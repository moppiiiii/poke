import { Query, Resolver } from '@nestjs/graphql';

import { fetchResource } from '../../libs/fetchResource';
import { Pokemon, PokemonList } from '../../models/pokemon/pokemon.model';

@Resolver('Pokemon')
export class PokemonResolver {
  @Query(() => [Pokemon])
  async pokemons(): Promise<Pokemon[]> {
    const pokemonList = await fetchResource<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemonNamedResources = pokemonList.results;
    const pokemon = await Promise.all(
      pokemonNamedResources.map((resource) => {
        let pokemonRecord = fetchResource<Pokemon>(resource.url);
        return pokemonRecord;
      })
    );

    return pokemon;
  }
}
