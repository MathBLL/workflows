const userCode = "console.log('Código malicioso')";
eval(userCode);

const userInput = "<img src=x onerror=alert(1)>";
document.getElementById("output").innerHTML = userInput;

const password = "123456";
if (inputPassword === password) {
  console.log("Acesso concedido");
}
