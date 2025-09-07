// Select all price cells
const prices = document.querySelectorAll(".prices");
let total = 0;

// Calculate the sum of prices
prices.forEach(priceCell => {
  total += parseFloat(priceCell.textContent);
});

// Create a new row
const table = document.getElementById("groceryTable");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Span the cell across both columns
totalCell.colSpan = 2;
totalCell.className = "total";
totalCell.textContent = "Total Price: Rs " + total;

// Append cell and row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
