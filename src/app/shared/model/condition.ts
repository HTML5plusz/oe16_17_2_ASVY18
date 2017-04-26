import {ConditionType} from './condition-type';
import {Sport} from './sport';

export interface Condition {
  id: number;
  name: string;
  description: string;
  type: ConditionType;
  sport: Sport;
  minimum: string;
  maximum: string;
  equal: string;
}
