const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-expense-btn");
const totalExpense = document.getElementById("total-expense");
const expenseList = document.getElementById("expense-list");

let total = 0;

addExpenseBtn.addEventListener("click", () => {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());
    
    if (name && !isNaN(amount) && amount > 0) {
        addExpense(name, amount);
        expenseNameInput.value = "";
        expenseAmountInput.value = "";
    }
});

function addExpense(name, amount) {
    const listItem = document.createElement("li");
    listItem.className = "expense-item";

    const expenseText = document.createElement("span");
    expenseText.textContent = `${name}: ₹${amount.toFixed(2)}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
        total -= amount;
        updateTotalExpense();
    });

    listItem.appendChild(expenseText);
    listItem.appendChild(deleteBtn);
    expenseList.appendChild(listItem);

    total += amount;
    updateTotalExpense();
}

function updateTotalExpense() {
    totalExpense.textContent = `₹${total.toFixed(2)}`;
}
