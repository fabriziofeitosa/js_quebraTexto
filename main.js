function fatiar() {
    var text = document.getElementById('texto').value;
    var tamanho = parseInt((document.getElementById('tamanho').value > 0) ? document.getElementById('tamanho').value : 30);
    var linhas = parseInt((document.getElementById('linhas').value > 0) ? document.getElementById('linhas').value : 0);
    var centralizar = document.getElementById('centralizar').checked;

    // Verificar valor
    if (!text) return alert("Defina um valor para o texto!");

    // Fatiar todo o texto em um array
    let result = text.split('');

    // variáveis
    var cont = 0,
        contLinha = 0,
        lastEmptyIndex = null,
        outIndex = 0,
        sumIndex = 0;

    // Percorrer todo o array de letras para procurar valor vazio & se já passou do tamanho definido
    for (const [index, value] of result.entries()) {

        // salvar o último espaço vazio que teve
        if (value == ' ') lastEmptyIndex = index;

        // Se já passar do valor, salvo esse index
        if (cont >= tamanho) outIndex = index;

        // não é vazio e passou do tamanho
        if (value != ' ' && cont >= tamanho) {
            result[lastEmptyIndex] = `\n`;

            // Aumentar contador de linhas se for defenido um valor
            if (linhas > 0) {
                contLinha++;

                // Adicionar linha vazia
                if (contLinha >= linhas) {
                    result.splice((lastEmptyIndex + 1), 0, "\n");
                    contLinha = 0;
                }
            }

            // Compesar a diferença ao iniciar
            sumIndex = (outIndex - lastEmptyIndex);
            cont = 0 + sumIndex;
        } else {

            // crescer contator normlamente
            cont++;
        }
    }

    // Centralizar texto?
    if (centralizar) {
        document.getElementById("resultado").setAttribute("style", "text-align:center;font-weight:bold;");
    } else {
        document.getElementById("resultado").setAttribute("style", "text-align:left;");
    }

    // Escrever resultado final
    document.getElementById("resultado").value = result.join('');
}

function copiarTexto() {
    // Pega o valor
    var copyText = document.getElementById("resultado");

    // Verificar valor
    if (copyText.value <= 0) return alert("Nenhum valor encontrado.");

    // Seleciona o valor
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    // Copia o valor
    document.execCommand("copy");
    alert("Copiado!");
}

// Carregar texto de exemplo.
function textoExemplo() {
    var caixaTexto = document.querySelector("#texto");
    caixaTexto.value = 'Tem que recolher ITCD? Não tem? Como é que funciona a questão do ITCD? Por que? O João faleceu, deixou lá três filhos, mais dois netos de um filho pré-morto. Estes netos vão representar o pai pré-morto na herança do avô? Vão! E como é que fica a questão do ITCD? Tem que pagar dois ITCD, por exemplo? Um do pai que é pré-morto e outro do avô para o pai? Então terei que pagar, por exemplo, uma escadinha aqui, se a gente pegar uma escadinha, vamos pegar aqui. Teria que pagar primeiro do avô pro pai pré-morto e depois do pai pré-morto para os netos? É uma pergunta. Gente, entenda, o direito de representação ele não tem uma dupla vocação sucessória. O direito de representação ele significa alguém pulando uma etapa para chegar à sucessão do outro. Tanto é que não há necessidade de abrir inventário do pré-morto para você fazer a representação. Não tem essa necessidade. Não precisa ter sido aberto o inventário, não precisa abrir se não foi aberto. Você só vai lá e se habilita. Não tem segredo. O direito de representação ele realmente viabiliza essa situação. Se é essa situação, é como se o próprio falecido tivesse transferindo para os representantes. É por isso que não incide duplo ITCD. Só vai incidir um ITCD.'
}