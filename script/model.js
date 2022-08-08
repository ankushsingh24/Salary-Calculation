const salaryOperations = {
  BasicSalary: 0,
  HRA() {
    return this.BasicSalary * 0.5;
  },
  DA() {
    return this.BasicSalary * 0.4;
  },
  TA() {
    return this.BasicSalary * 0.3;
  },
  MA() {
    return this.BasicSalary * 0.6;
  },
  GS() {
    return BasicSalary + this.HRA() + this.DA() + this.TA() + this.MA();
  },
  TAX() {
    return (BasicSalary * 10) / 100;
  },
  NS() {
    return this.GS() - this.TAX();
  },
};
