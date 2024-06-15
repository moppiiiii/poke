import { Query, Resolver } from '@nestjs/graphql';
import { map } from 'remeda';

import { fetchResource } from '../../libs/fetchResource';
import { getPokemonId } from '../../libs/getPokemonId';
import { Pokemon, PokemonResource } from '../../models/pokemon/pokemon.model';

@Resolver('Pokemon')
export class PokemonResolver {
  @Query(() => [Pokemon])
  async pokemons(): Promise<Pokemon[]> {
    const pokemonResource = await fetchResource<PokemonResource>(
      'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    );
    const pokemonResults = pokemonResource.results;
    const allPokemon = map(pokemonResults, (v) => ({ id: getPokemonId(v.url), name: v.name }));
    return allPokemon;
  }
}
