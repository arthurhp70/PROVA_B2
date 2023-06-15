// Função para verificar se um número é primo
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  


  
  // Função para validar uma senha
  function validatePassword(password) {
    const passwordInput = document.getElementById('password-input');
    const passwordValidation = document.getElementById('password-validation');
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (passwordInput.value.match(passwordRegex)) {
      passwordValidation.textContent = 'Senha valida!';
      passwordValidation.style.color = 'green';
    } else {
      passwordValidation.textContent = 'Senha invalida!';
      passwordValidation.style.color = 'red';
    }
  }







  // Função para calcular o fatorial de um número
function factorial(number) {
    let result = 1;
    
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    
    return result;
  }
  
 




  
  // Função para verificar se um número é um quadrado perfeito
  function isPerfectSquare(number) {
    const squareRoot = Math.sqrt(number);
    return squareRoot === Math.floor(squareRoot);
  }
  




  // Função para lidar com o envio do formulário de verificação de número primo
function handlePrimeFormSubmit(event) {
    event.preventDefault();
  
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);
  
    const primeResult = document.getElementById('primeResult');
  
    if (isPrime(number)) {
      primeResult.textContent = `${number} e um numero primo.`;
    } else {
      primeResult.textContent = `${number} nao e um numero primo.`;
    }
  
    numberInput.value = '';
  }






  // Função para exibir o resultado do fatorial
  document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const factorialInput = document.getElementById("factorialInput").value;
    const factorialResult = document.getElementById("factorialResult");
    
    const result = factorial(factorialInput);
    factorialResult.textContent = "O fatorial de " + factorialInput + " e: " + result;
  });
  





  // Função para verificar se o número digitado é um quadrado perfeito
  function checkPerfectSquare() {
    const numberInput = document.getElementById('number-input');
    const perfectSquareCheck = document.getElementById('perfect-square-check');
  
    const number = Number(numberInput.value);
    if (isPerfectSquare(number)) {
      perfectSquareCheck.textContent = `${number} e um quadrado perfeito!`;
      perfectSquareCheck.style.color = 'green';
    } else {
      perfectSquareCheck.textContent = `${number} nao e um quadrado perfeito.`;
      perfectSquareCheck.style.color = 'red';
    }
  }




  
  
  // Executa as funções para exibir os resultados no HTML
  const primeForm = document.getElementById('primeForm');
  primeForm.addEventListener('submit', handlePrimeFormSubmit);






 
  

    
     
