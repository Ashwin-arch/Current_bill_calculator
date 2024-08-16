document.getElementById('calculate-btn').addEventListener('click', function() {
    const units = document.getElementById('units').value;
    const ratePerUnit = 0.12; // Example rate per kWh

    if (units) {
        const totalBill = units * ratePerUnit;
        document.getElementById('result').textContent = `Your total bill is $${totalBill.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter your usage.';
    }
});
