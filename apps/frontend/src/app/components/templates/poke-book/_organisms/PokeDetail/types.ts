export type PokeDetailComponentProps = {
  pokemonDetail?: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    criesSource: string;
    frontImage: string;
    backImage: string;
  };
};
