import { Decklist } from '@/types/decklist';
import { NavigationStatus } from '@/types/network';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

// Root state specific
export interface RootState {}

export interface DecklistState {
  decklist: Decklist;
}

export interface SearchState {
  status: NavigationStatus;
  searchedCards: PokemonTCG.Card[];
  name: string;
}