import { Cookie } from './Cookie';

export class SprinkleCookie extends Cookie {
  sprinkleColour: string;

  constructor(name: string, sprinkleColour: string) {
    super(name);
    this.sprinkleColour = 'pink';
  }
}
