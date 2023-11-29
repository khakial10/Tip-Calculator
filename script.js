function calculateTip() {
  const billAmount = parseFloat(document.getElementById('billAmount').value);
  const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
  const tipAmount = (billAmount * tipPercentage) / 100;
  document.getElementById('tipAmount').innerText = `Tip: $${tipAmount.toFixed(2)}`;
}
