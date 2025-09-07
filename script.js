// Create a button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price"); // select all price cells
  let sum = 0;

  // calculate total
  prices.forEach(cell => {
    sum += parseFloat(cell.textContent);
  });

  // check if total row already exists, remove it to avoid duplicates
  const oldTotalRow = document.getElementById("totalRow");
  if (oldTotalRow) oldTotalRow.remove();

  // create a new row for total
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // span across 2 columns
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = "Total Price: Rs " + sum;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// add event listener to button
getSumBtn.addEventListener("click", getSum);
