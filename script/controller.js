function compute() {
  var BasicSalary = document.getElementById("salary").value;
  BasicSalary = parseInt(BasicSalary);

  document.getElementById("hra").innerText = salaryOperations.hra(BasicSalary);
  document.getElementById("da").innerText = salaryOperations.da(BasicSalary);
  document.getElementById("ta").innerText = salaryOperations.ta(BasicSalary);
  document.getElementById("ma").innerText = salaryOperations.ma(BasicSalary);
  document.getElementById("gs").innerText = salaryOperations.gs(BasicSalary);
  document.getElementById("ns").innerText = salaryOperations.ns(BasicSalary);
}
