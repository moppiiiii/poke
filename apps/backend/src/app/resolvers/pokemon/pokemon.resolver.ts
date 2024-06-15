import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { map } from 'remeda';

import { fetchResource } from '../../libs/fetchResource';
import { getPokemonId } from '../../libs/getPokemonId';
import { Pokemon, PokemonResource } from '../../models/pokemon/pokemon.model';
import { PokemonDetail } from '../../models/pokemon/pokemon-detail.model';
import { POKE_API_POKEMON_BASE_PATH } from './constants';

@Resolver('Pokemon')
export class PokemonResolver {
  @Query(() => [Pokemon])
  async pokemons(): Promise<Pokemon[]> {
    const pokemonResource = await fetchResource<PokemonResource>(`${POKE_API_POKEMON_BASE_PATH}?limit=100000&offset=0`);
    const pokemonResults = pokemonResource.results;
    const allPokemon = map(pokemonResults, (v) => ({ id: getPokemonId(v.url), name: v.name }));
    return allPokemon;
  }
}

@Resolver('PokemonDetail')
export class PokemonDetailResolver {
  @Query(() => PokemonDetail)
  async pokemonDetail(@Args('id', { type: () => Int }) id: number): Promise<PokemonDetail> {
    const pokemonDetail = await fetchResource<PokemonDetail>(`${POKE_API_POKEMON_BASE_PATH}/${id.toString()}/`);
    return pokemonDetail;
  }
}
