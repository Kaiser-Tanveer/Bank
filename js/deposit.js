
document.getElementById('deposit-btn').addEventListener('click', function(){

    const newDepositAmount = getInputUpdateById('deposit-field');
    
    const previousDepositAmount = getElementValue('total-deposit');
    

    // New deposit Total
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    // Set element value
    setElementValueById('total-deposit', newDepositTotal);

    // Total Balance Calculation
    const previousTotalBalance = getElementValue('total-balance');
    const newTotalBalance = previousTotalBalance + newDepositAmount;

    // Set Total Balance
    setElementValueById('total-balance', newTotalBalance);
})