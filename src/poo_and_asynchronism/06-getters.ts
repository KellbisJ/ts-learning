export class MyDate {
  constructor(
    public year: number = 2006,
    public month: number = 2,
    private _day: number = 21 // This is how private elements are called with a _ in the beginning.
  ) {
    if (month < 1 || month > 12) {
      throw new Error('Invalid month. It would be between 1 or 12');
    } else if (_day < 1 || _day > 31) {
      throw new Error('Invalid day. It would be between 1 or 31');
    }
  }
  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value <= 9 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        const totalDays = this._day + amount;
        if (totalDays > 31) {
          const remainingDays = totalDays - 31;
          this._day = remainingDays;
          this.month += 1;
          if (this.month > 12) {
            this.month = 1;
            this.year += 1;
          }
          const day = this.addPadding(this._day);
          const month = this.addPadding(this.month);
          console.log(`Next month. updated date: ${day}/${month}/${this.year}`);
        } else {
          this._day = totalDays;
        }
        break;
      case 'months':
        const totalMonths = this.month + amount;
        if (totalMonths > 12) {
          const remainingMonths = totalMonths - 12;
          this.month = remainingMonths;
          this.year += 1;
          console.log(
            `Next year. updated date: ${this._day}/${this.month}/${this.year}`
          );
        } else {
          this.month = totalMonths;
        }
        break;
      case 'years':
        this.year += amount;
        break;
      default:
        throw new Error('INVALID_TYPE_ERROR');
    }
  }
  get day() {
    return this.addPadding(this._day);
  }
  get isLeapYear(): boolean {
    return (
      (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0
    );
  }
}

const myDate = new MyDate(2006, 2, 1);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2020, 2, 11);
console.log(myDate2.isLeapYear);

const myDate3 = new MyDate(2025, 2, 11);
console.log(myDate3.isLeapYear);

const myDate4 = new MyDate(2028, 2, 11);
console.log(myDate4.isLeapYear);
