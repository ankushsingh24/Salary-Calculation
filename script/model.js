var salaryOperations = {
  hra(BasicSalary) {
    return BasicSalary * 0.5;
  },
  da(BasicSalary) {
    return BasicSalary * 0.4;
  },
  ta(BasicSalary) {
    return BasicSalary * 0.3;
  },
  ma(BasicSalary) {
    return BasicSalary * 0.6;
  },
  gs(BasicSalary) {
    return (
      BasicSalary +
      salaryOperations.hra(BasicSalary) +
      salaryOperations.da(BasicSalary) +
      salaryOperations.ta(BasicSalary) +
      salaryOperations.ma(BasicSalary)
    );
  },
  tax(BasicSalary) {
    return (BasicSalary * 10) / 100;
  },
  ns(BasicSalary) {
    return salaryOperations.gs(BasicSalary) - salaryOperations.tax(BasicSalary);
  },
};
