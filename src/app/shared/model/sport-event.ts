import {Sport} from './sport';
import {SportSpecialization} from './sport-specialization';
import {Condition} from './condition';
import {Round} from './round';
import {User} from './user';

export interface SportEvent {
  id: number;
  sport: Sport;
  specialization: SportSpecialization[];
  condition: Condition[];
  round: Round[];
  user: User[];
}
