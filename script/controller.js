window.addEventListener("load", bindEvents);
function bindEvents() {
  document.getElementById("compute").addEventListener("click", compute);
}

function compute() {
  let BasicSalary = document.getElementById("salary").value;
  salaryOperations.BasicSalary = parseInt(BasicSalary);
  // BasicSalary = parseInt(BasicSalary);

  for (let key in salaryOperations) {
    if (key == "BasicSalary" || key == "TAX") {
      continue;
    }
    document
      .getElementById("output")
      .appendChild(createPTag(key, salaryOperations[key]()));
  }

  // document.getElementById("hra").innerText = salaryOperations.hra(BasicSalary);
  // document.getElementById("da").innerText = salaryOperations.da(BasicSalary);
  // document.getElementById("ta").innerText = salaryOperations.ta(BasicSalary);
  // document.getElementById("ma").innerText = salaryOperations.ma(BasicSalary);
  // document.getElementById("gs").innerText = salaryOperations.gs(BasicSalary);
  // document.getElementById("ns").innerText = salaryOperations.ns(BasicSalary);
}

function createPTag(key, val) {
  const pTag = document.createElement("p");
  pTag.innerText = `${key} is ${val}`;
  return pTag;
}
