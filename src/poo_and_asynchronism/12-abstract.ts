import { Animal, Dog } from './09-protected';

export const elite = new Animal('elite');
elite.greeting();

export const max = new Dog('Max', 'Kellbis');
max.greeting();
max.woof(3);
