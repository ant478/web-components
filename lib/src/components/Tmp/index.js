import { getUniqId } from 'src/common/helpers/id';

export class Tmp {
  constructor() {
    this.a = getUniqId('Tmp');
  }
}
