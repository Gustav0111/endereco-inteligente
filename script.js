const form = document.getElementById("form-endereco");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const uf = document.getElementById("uf");

  const cepRegex = /^[0-9]{5}-[0-9]{3}$/;
  const ufRegex = /^[A-Z]{2}$/;

  if (!cep.value.match(cepRegex)) {
    alert("CEP inválido! Use o formato 00000-000.");
    return;
  }

  if (logradouro.value.trim().length < 5) {
    alert("O logradouro deve conter pelo menos 5 caracteres.");
    return;
  }

  if (!/^\d+$/.test(numero.value)) {
    alert("O número deve conter apenas dígitos numéricos.");
    return;
  }

  if (!uf.value.match(ufRegex)) {
    alert("UF deve conter exatamente 2 letras maiúsculas (ex: SP, RJ).");
    return;
  }

  alert("Endereço cadastrado com sucesso!");
});

// Máscara de CEP
document.getElementById("cep").addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 5) {
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  }
  e.target.value = value;
});

// Converter UF para maiúsculo automaticamente
document.getElementById("uf").addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase();
});
