export type PokeBookTemplateProps = {
  isLoading: boolean;
  pokemons?: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }[];
};
