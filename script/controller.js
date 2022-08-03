function compute() {
  var BasicSalary = document.getElementById("salary").value;
  var HRA = BasicSalary * 0.5;
  var DA = BasicSalary * 0.2;

  document.getElementById("hra").innerText = HRA;
  document.getElementById("da").innerText = DA;
}
