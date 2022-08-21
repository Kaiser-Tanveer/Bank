function getInputUpdateById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}



function getElementValue(elementId){
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    elementField.innerText = '';
    return elementValue;
}



function setElementValueById(elementId, newValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}


