document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputUpdateById('withdraw-field');
    
    const previousWithdrawAmount = getElementValue('total-withdraw');

    // New withdraw Total
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    // Set element value
    setElementValueById('total-withdraw', newWithdrawTotal);


    // Total Balance Calculation
    const previousTotalBalance = getElementValue('total-balance');
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;

    // Set Total Balance
    setElementValueById('total-balance', newTotalBalance);
})