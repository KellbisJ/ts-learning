export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    if (month < 1 || month > 12) {
      throw new Error('Invalid month. It would be between 1 or 12');
    } else if (day < 1 || day > 31) {
      throw new Error('Invalid day. It would be between 1 or 31');
    } else {
      this.year = year;
      this.month = month;
      this.day = day;
    }
  }
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    return value <= 9 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        const totalDays = this.day + amount;
        if (totalDays > 31) {
          const remainingDays = totalDays - 31;
          this.day = remainingDays;
          this.month += 1;
          if (this.month > 12) {
            this.month = 1;
            this.year += 1;
          }
          const day = this.addPadding(this.day);
          const month = this.addPadding(this.month);
          console.log(`Next month. updated date: ${day}/${month}/${this.year}`);
        } else {
          this.day = totalDays;
        }
        break;
      case 'months':
        const totalMonths = this.month + amount;
        if (totalMonths > 12) {
          const remainingMonths = totalMonths - 12;
          this.month = remainingMonths;
          this.year += 1;
          console.log(
            `Next year. updated date: ${this.day}/${this.month}/${this.year}`
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
}

const myDate = new MyDate(2006, 2, 21);
console.log(myDate.printFormat());
myDate.add(11, 'days');
