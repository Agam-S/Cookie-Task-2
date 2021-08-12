import { Cookie } from './Cookie';
import { Colors } from './CookieEnums';

export class SprinkleCookie extends Cookie {
  sprinkleColour: Colors;

  constructor(name: string, sprinkleColour: Colors) {
    super(name);
    this.sprinkleColour = Colors.Pink;
  }
}
