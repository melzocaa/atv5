function iniciarJornada() {
    // 1. Entrada de dados
    let nome = prompt("Qual é o seu nome?");
    let cosmoAtual = +prompt("Qual é o seu Cosmo Inicial (digite um número, ex: 1000)?");

    // 2. Decisão e multiplicação
    let sacrificar = confirm("Deseja sacrificar um sentido para despertar o Sétimo Sentido?");
    if (sacrificar) {
        cosmoAtual *= 2; 
    }

    // 3. Batalha (Subtração)
    cosmoAtual -= 200; // Áries
    cosmoAtual -= 350; // Touro
    cosmoAtual -= 400; // Gêmeos

    // 4. Validação
    let statusVida = "Vivo"; 
    let venceu = (cosmoAtual >= 1000 && statusVida === "Vivo");

    // 5. Exibir resultado na tela
    let elementoRelatorio = document.getElementById("relatorioTela");

    // Verifica se o usuário clicou em cancelar no prompt do nome ou cosmo
    if (nome === null || isNaN(cosmoAtual)) {
         elementoRelatorio.innerText = "Jornada cancelada ou cosmo inválido. Tente novamente!";
         elementoRelatorio.style.color = "#C71585";
         return; // Para a função aqui
    }

    if (venceu) {
        elementoRelatorio.innerText = `Parabéns, ${nome}, você salvou Athena com ${cosmoAtual} de cosmo restante!`;
        elementoRelatorio.style.color = "#4CAF50"; // Verde
    } else {
        elementoRelatorio.innerText = `Infelizmente, ${nome}, seu cosmo de ${cosmoAtual} não foi suficiente. Athena não resistiu...`;
        elementoRelatorio.style.color = "#f44336"; // Vermelho
    }
}