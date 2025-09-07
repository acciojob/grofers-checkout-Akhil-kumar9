
const getSum = () => {
  const prices = document.querySelectorAll(".prices"); // get all price cells
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += parseFloat(prices[i].textContent); // convert text to number
  }

  // Create new row for total
  const table = document.getElementById("groceryTable");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.colSpan = 2; // span across both columns
  totalCell.textContent = "Total Price: " + sum;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};


