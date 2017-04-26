import {Race} from './race';

export interface Round {
  id: number;
  name: string;
  description: string;
  race: Race[];
}
