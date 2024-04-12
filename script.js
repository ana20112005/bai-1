function validateInputs(input1, input2) {

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Enter valid numbers in both input fields");
        return false;
    }
    
    return { num1, num2 };
}

function addNumbers() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;
    
    const validation = validateInputs(input1, input2);
    if (!validation) return;
    
    const { num1, num2 } = validation;
    const sum = num1 + num2;
    document.getElementById("result").innerText = `${sum}`;
}

document.getElementById("addButton").addEventListener("click", addNumbers);

function subtractNumbers() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;
    
    const validation = validateInputs(input1, input2);
    if (!validation) return;
    
    const { num1, num2 } = validation;
    const difference = num1 - num2;
    document.getElementById("result").innerText = `${difference}`;
}

document.getElementById("subtractButton").addEventListener("click", subtractNumbers);

function multiplyNumbers() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;
    
    const validation = validateInputs(input1, input2);
    if (!validation) return;
    
    const { num1, num2 } = validation;
    const product = num1 * num2;
    document.getElementById("result").innerText = `${product}`;
}

document.getElementById("multiplyButton").addEventListener("click", multiplyNumbers);


function divideNumbers() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;
    
    const validation = validateInputs(input1, input2);
    if (!validation) return;
    
    const { num1, num2 } = validation;
    
    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero";
        return;
    }
    
    const quotient = num1 / num2;
    document.getElementById("result").innerText = `${quotient}`;
}

document.getElementById("divideButton").addEventListener("click", divideNumbers);

