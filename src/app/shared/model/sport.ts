import {SportSpecialization} from './sport-specialization';

export interface Sport {
  id: number;
  name: string;
  description: string;
  specialization: SportSpecialization[];
}
