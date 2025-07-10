document.getElementById("expenseForm").onsubmit = function (e) {
    e.preventDefault();
    const reason = document.getElementById("reason").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (reason && amount && category) {
        const li = document.createElement("li");
        li.textContent = `${category} - ${reason}: R${amount}`;
        document.getElementById("expenseList").appendChild(li);
    }

    e.target.reset();
};

document.getElementById("clearExpenses").onclick = function () {
    document.getElementById("expenseList").innerHTML = "";
};