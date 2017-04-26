import {Seria} from './seria';
import {Season} from './season';
import {SportEvent} from './sport-event';
import {Condition} from './condition';

export interface Championship {
  id: number;
  name: string;
  description: string;
  seria: Seria;
  season: Season;
  event: SportEvent[];
  condition: Condition[];
  startDate: string;
  endDate: string;
}
