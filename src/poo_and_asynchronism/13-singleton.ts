export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('ONE_TIME');

      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}
const MyService1 = MyService.create('service 1');
console.log(MyService1.getName());
const MyService2 = MyService.create('service 2');
console.log(MyService2.getName());
const MyService3 = MyService.create('service 3');
console.log(MyService3.getName());

console.log(MyService1 === MyService2);
