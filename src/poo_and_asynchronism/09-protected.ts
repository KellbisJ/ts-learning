export class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Walking');
  }
  greeting() {
    return `Hello, I'm called ${this.name}`;
  }
  protected snooping() {
    console.log('snooping');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.snooping();
  }
  move() {
    super.move();
    console.log('moving as a dog');
  }
}

const shadow = new Dog('shadow', 'Kellbis');
shadow.woof(1);
shadow.move();
