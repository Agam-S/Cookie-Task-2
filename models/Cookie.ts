import { Colors } from './CookieEnums';

export class Cookie {
  name: string;
  colour: Colors;
  chocolateChipNum: number;

  constructor(name: string) {
    this.name = name;
    this.colour = Colors.Brown;
    this.chocolateChipNum = 0;
  }
}
