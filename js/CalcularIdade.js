var form = document.getElementById("form");
var fieldName = document.getElementById("nameForm");
var fieldBirth = document.getElementById("birthForm")
var txt = document.getElementById("txt");
var locale = "pt-BR";
var tbl = document.querySelector("#tbl");
var fieldsTbl = document.querySelector("#fieldsTable");
var clear = document.getElementById("clear");

// adicionar o evento ao enviar o formulario
form.addEventListener("submit", event => {
    // evita o re-load do formulário
    event.preventDefault();

    // constante de um ano em milissegundos
    var YEAR = 31536000000;

    // constante de um dia em milissegundos
    var DAY = 86400000;

    // dia do aniversário digitado no campo
    var birth = new Date(fieldBirth.value)

    // dia do aniversário em milissegundos mais um dia
    var birthDay = birth.setTime(birth.getTime() + DAY);

    // dia de hoje
    var today = new Date();

    // dia de hoje em milissegundos
    var todayNow = today.getTime()

    // calcula a idade e retorna um valor inteiro arredondado para baixo
    var calcAge = Math.floor((todayNow - birthDay - DAY * 4) / YEAR);

    // torna a tabela visível
    tbl.style.display = "block";

    var obj = new String(fieldName.value);

    // alimenta os campos com os dados
    fieldsTbl.innerHTML =
    ` <tr >
        <td>${obj.toUpperCase()}</td>
        <td>${calcAge} ano(s)</td>
        <td>${birth.toLocaleDateString(locale)}</td>
        <td>${today.toLocaleDateString(locale)}</td>
        <td>${birthDay}</td>
        <td>${todayNow}</td>
    </tr>`

    console.log(`Seu Nome: ${obj.toUpperCase()}`);
    console.log(`Sua idade: ${calcAge} ano(s)`);
    console.log(`Dia do seu aniversário: ${birth.toLocaleDateString(locale)}`);
    console.log(`Dia de hoje: ${today.toLocaleDateString(locale)}`);
    console.log(`Seu aniversário em milissegundos: ${birthDay}`);
    console.log(`Momento atual em milissegundos: ${todayNow}`);

});// fim do evento


clear.addEventListener("click", event => {
    document.location.reload(true);
});




