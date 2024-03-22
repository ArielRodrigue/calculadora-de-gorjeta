function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = document.getElementById("tipPercentage").value;
    var customTip = parseFloat(document.getElementById("customTip").value);

    // Calcula a gorjeta com base na porcentagem selecionada ou personalizada
    var tipAmount;
    if (tipPercentage === 'custom') {
        tipAmount = billAmount * (customTip / 100);
    } else {
        tipAmount = billAmount * (tipPercentage / 100);
    }

    // Calcula o valor total da conta com a gorjeta incluída
    var totalAmount = billAmount + tipAmount;

    // Exibe os resultados na tela
    var results = document.getElementById("results");
    results.innerHTML = `
        <p>Gorjeta: R$ ${tipAmount.toFixed(2)}</p>
        <p>Total: R$ ${totalAmount.toFixed(2)}</p>
    `;
}

// Mostra ou oculta o campo de entrada personalizado ao selecionar/deselecionar a opção "Personalizado"
document.getElementById("tipPercentage").addEventListener("change", function() {
    var customTipInput = document.getElementById("customTipInput");
    if (this.value === 'custom') {
        customTipInput.style.display = "block";
    } else {
        customTipInput.style.display = "none";
    }
});
