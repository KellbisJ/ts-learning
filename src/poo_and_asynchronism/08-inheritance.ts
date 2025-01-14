export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Walking');
  }
  greeting() {
    return `Hello, I'm called ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const shadow = new Dog('shadow', 'Kellbis');
shadow.move();
console.log(shadow.greeting());
shadow.woof(3);
console.log(shadow.owner);
