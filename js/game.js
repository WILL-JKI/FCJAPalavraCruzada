document.addEventListener('DOMContentLoaded', () => {
    const bancoDePalavras = [
        { palavra: "MONICA", dica: "Dona da rua, sempre com seu coelhinho Sansão.", imagem: "https://upload.wikimedia.org/wikipedia/pt/4/43/Monica_%28Mauricio_de_Sousa_Produ%C3%A7%C3%B5es%29.png" },
        { palavra: "CEBOLINHA", dica: "Troca o 'R' pelo 'L' em suas falas e tem um plano 'infalível'.", imagem: "https://upload.wikimedia.org/wikipedia/pt/9/98/Cebolinha.png" },
        { palavra: "CASCAO", dica: "Tem pavor de água e vive fugindo do banho.", imagem: "https://upload.wikimedia.org/wikipedia/pt/3/35/Cascao.png" },
        { palavra: "MAGALI", dica: "Conhecida por seu apetite voraz, come de tudo!", imagem: "https://upload.wikimedia.org/wikipedia/pt/5/59/Magali.png" },
        { palavra: "CHICO", dica: "Personagem caipira que vive na roça. Adora goiabas. (Chico...)", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b8/Chico_Bento_%28personagem%29.jpg" },
        { palavra: "BIDU", dica: "O cachorrinho azul e inteligente do Franjinha.", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Bidu.png" },
        { palavra: "FRANJINHA", dica: "O pequeno cientista da turma, sempre com um novo invento.", imagem: "https://upload.wikimedia.org/wikipedia/pt/3/36/Franjinha_%28Turma_da_M%C3%B4nica%29.png" },
        { palavra: "ANJINHO", dica: "O anjo da guarda da turma, que vive nas nuvens.", imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d6/Anjinho_personagem_2.png" },
        { palavra: "ROSINHA", dica: "A namoradinha do Chico Bento.", imagem: "https://i.ibb.co/xtw5Xdnn/imagem-2025-07-07-153603372.png" },
        { palavra: "JOTALHAO", dica: "Um elefante verde e desajeitado, amigo da turma da mata.", imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8a/Jotalh%C3%A3o.png" },
        { palavra: "HORACIO", dica: "Um dinossauro filósofo, vegetariano e de bom coração.", imagem: "https://upload.wikimedia.org/wikipedia/pt/9/95/Horacio.jpg" },
        { palavra: "MINGAU", dica: "O gato de estimação da Magali.", imagem: "https://img.cartoongoodies.com/wp-content/uploads/2024/05/Turma-da-Monica-Mingau-300x258.png" },
        { palavra: "PENADINHO", dica: "Um fantasminha camarada que vive no cemitério.", imagem: "https://static.wikia.nocookie.net/monica/images/9/9c/Penadinho.png/revision/latest?cb=20161115213419&path-prefix=pt-br" },
        { palavra: "LUCA", dica: "Um personagem cadeirante que adora esportes.", imagem: "https://i.ibb.co/Bdk91PP/imagem-2025-07-07-153924309.png" },
        { palavra: "TITI", dica: "O garoto dentuço e galanteador da turma.", imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Titi_%28Turma_da_M%C3%B4nica%29.png" },
        { palavra: "FLOR", dica: "Colorida e cheirosa, enfeita o jardim.", imagem: "https://i.pinimg.com/736x/75/9d/ab/759dabdcedc31e5a79298b5117f61e88.jpg" },
        { palavra: "CORACAO", dica: "Órgão que bombeia sangue e símbolo do amor.", imagem: "ng-heart-icon-perfect-love-symbol-valentine-s-day-sign-emblem-isolated-on-flat-style-for-graphic-and-web-design-logo-dynamic-one-line-draw-png.png" },
        { palavra: "SOL", dica: "A estrela que ilumina nosso dia.", imagem: "https://www.freeiconspng.com/uploads/medium-plain-sun-drawing-images-26.jpg" },
        { palavra: "BOLA", dica: "Usada para jogar futebol.", imagem: "https://png.pngtree.com/png-vector/20191114/ourmid/pngtree-soccer-ball-icon-flat-style-png-image_1978253.jpg" },
        { palavra: "CASA", dica: "O lugar onde moramos.", imagem: "https://gpng.net/wp-content/uploads/2020/10/house-png-free-cartoon-png-images.png" },
        { palavra: "GATO", dica: "Animal de estimação que faz 'miau'.", imagem: "https://img.pikbest.com/png-images/20240902/cute-cat-cartoon-images-free-download_10784154.png!sw800" },
        { palavra: "CACHORRO", dica: "Animal que faz 'au au'.", imagem: "https://easydrawingguides.com/wp-content/uploads/2021/12/cute-dog-step-by-step-drawing-tutorial-step-10.png" },
        { palavra: "PASSARO", dica: "Animal que voa e canta.", imagem: "https://images.vexels.com/media/users/3/230516/isolated/preview/10174349f0f6d938d5ecaba3264b048c-plano-de-passaro-voando.png?w=360" },
        { palavra: "BORBOLETA", dica: "Inseto colorido que voa.", imagem: "https://freesvg.org/img/Cute-Cartoon-Butterfly.png" },
        { palavra: "PEIXE", dica: "Animal que vive na água.", imagem: "https://images.vexels.com/media/users/3/192646/isolated/preview/7621d350747c8357097aa34a5173cadd-fish-profile-hand-drawn.png?w=360" },
        { palavra: "PATO", dica: "Animal que faz 'quack'.", imagem: "https://www.freeiconspng.com/uploads/duck-png-8.png" },
    ];

    const TAMANHO_GRID = 15;
    const PALAVRAS_POR_JOGO = 7;
    let matrizDoGrid;
    let palavrasPosicionadas = [];

    const elementoGrid = document.getElementById('crossword-grid');
    const elementoSobreposicaoImagens = document.getElementById('image-overlay');
    const botaoNovoJogo = document.getElementById('new-game-btn');
    const botaoDica = document.getElementById('hint-btn');
    const elementoMensagem = document.getElementById('message');

    function reiniciar() {
        iniciarJogo();
    }

    function iniciarJogo() {
        elementoMensagem.textContent = '';
        palavrasPosicionadas = [];
        let sucesso = false;
        let tentativas = 0;

        while (!sucesso && tentativas < 20) {
            const palavrasSelecionadas = selecionarPalavrasAleatorias(bancoDePalavras, PALAVRAS_POR_JOGO);
            matrizDoGrid = criarGridVazio();
            palavrasPosicionadas = [];
            sucesso = gerarLayout(palavrasSelecionadas);
            tentativas++;
        }

        if (!sucesso) {
            reiniciar();
            return;
        }
        
        palavrasPosicionadas.sort((a, b) => (a.linha * TAMANHO_GRID + a.coluna) - (b.linha * TAMANHO_GRID + b.coluna));
        renderizarGrid();
        renderizarImagens();
    }

    function selecionarPalavrasAleatorias(banco, quantidade) {
        const embaralhado = [...banco].sort(() => 0.5 - Math.random());
        return embaralhado.slice(0, quantidade);
    }

    function criarGridVazio() {
        return Array.from({ length: TAMANHO_GRID }, () => Array(TAMANHO_GRID).fill(null));
    }

    function gerarLayout(palavras) {
        palavras.sort((a, b) => b.palavra.length - a.palavra.length);
        for (const objetoPalavra of palavras) {
            let posicionada = false;
            if (palavrasPosicionadas.length === 0) {
                const linha = Math.floor(TAMANHO_GRID / 2);
                const coluna = Math.floor((TAMANHO_GRID - objetoPalavra.palavra.length) / 2);
                posicionarPalavra(objetoPalavra, linha, coluna, 'horizontal');
                posicionada = true;
            } else {
                for (let i = 0; i < 100 && !posicionada; i++) {
                    const intersecao = encontrarIntersecao(objetoPalavra.palavra);
                    if (intersecao) {
                        const { palavraExistente, indiceCharParaPosicionar, indiceCharExistente } = intersecao;
                        const direcao = palavraExistente.direcao === 'horizontal' ? 'vertical' : 'horizontal';
                        let linha, coluna;
                        if (direcao === 'vertical') {
                            linha = palavraExistente.linha - indiceCharParaPosicionar;
                            coluna = palavraExistente.coluna + indiceCharExistente;
                        } else {
                            linha = palavraExistente.linha + indiceCharExistente;
                            coluna = palavraExistente.coluna - indiceCharParaPosicionar;
                        }
                        if (podePosicionarPalavra(objetoPalavra.palavra, linha, coluna, direcao)) {
                            posicionarPalavra(objetoPalavra, linha, coluna, direcao);
                            posicionada = true;
                        }
                    }
                }
            }
            if (!posicionada) return false;
        }
        return true;
    }

    function encontrarIntersecao(palavraParaPosicionar) {
        const palavrasEmbaralhadas = [...palavrasPosicionadas].sort(() => 0.5 - Math.random());
        for (const palavraExistente of palavrasEmbaralhadas) {
            for (let i = 0; i < palavraExistente.palavra.length; i++) {
                for (let j = 0; j < palavraParaPosicionar.length; j++) {
                    if (palavraExistente.palavra[i] === palavraParaPosicionar[j]) {
                        return { palavraExistente, indiceCharParaPosicionar: j, indiceCharExistente: i };
                    }
                }
            }
        }
        return null;
    }

    function podePosicionarPalavra(palavra, linha, coluna, direcao) {
        if (direcao === 'horizontal') {
            if (coluna < 0 || coluna + palavra.length > TAMANHO_GRID) return false;
            if (coluna > 0 && matrizDoGrid[linha][coluna - 1]) return false;
            if (coluna + palavra.length < TAMANHO_GRID && matrizDoGrid[linha][coluna + palavra.length]) return false;

            for (let i = 0; i < palavra.length; i++) {
                if (matrizDoGrid[linha][coluna + i] && matrizDoGrid[linha][coluna + i] !== palavra[i]) return false;
                if (matrizDoGrid[linha][coluna + i] === null) {
                    if (linha > 0 && matrizDoGrid[linha - 1][coluna + i]) return false;
                    if (linha < TAMANHO_GRID - 1 && matrizDoGrid[linha + 1][coluna + i]) return false;
                }
            }
        } else { // vertical
            if (linha < 0 || linha + palavra.length > TAMANHO_GRID) return false;
            if (linha > 0 && matrizDoGrid[linha - 1][coluna]) return false;
            if (linha + palavra.length < TAMANHO_GRID && matrizDoGrid[linha + palavra.length][coluna]) return false;

            for (let i = 0; i < palavra.length; i++) {
                if (matrizDoGrid[linha + i][coluna] && matrizDoGrid[linha + i][coluna] !== palavra[i]) return false;
                if (matrizDoGrid[linha + i][coluna] === null) {
                    if (coluna > 0 && matrizDoGrid[linha + i][coluna - 1]) return false;
                    if (coluna < TAMANHO_GRID - 1 && matrizDoGrid[linha + i][coluna + 1]) return false;
                }
            }
        }
        return true;
    }

    function posicionarPalavra(objetoPalavra, linha, coluna, direcao) {
        for (let i = 0; i < objetoPalavra.palavra.length; i++) {
            if (direcao === 'horizontal') matrizDoGrid[linha][coluna + i] = objetoPalavra.palavra[i];
            else matrizDoGrid[linha + i][coluna] = objetoPalavra.palavra[i];
        }
        palavrasPosicionadas.push({ ...objetoPalavra, linha, coluna, direcao, estaResolvida: false });
    }

    function renderizarGrid() {
        elementoGrid.innerHTML = '';
        const cellSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cell-size'));
        const gapSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-size'));
        elementoGrid.style.gridTemplateColumns = `repeat(${TAMANHO_GRID}, 1fr)`;

        for (let r = 0; r < TAMANHO_GRID; r++) {
            for (let c = 0; c < TAMANHO_GRID; c++) {
                const celula = document.createElement('div');
                celula.classList.add('cell');
                if (matrizDoGrid[r][c]) {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.maxLength = 1;
                    input.dataset.linha = r;
                    input.dataset.coluna = c;
                    input.addEventListener('keydown', gerenciarInput);
            // Permite colar texto (útil para preencher rapidamente)
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const paste = (e.clipboardData || window.clipboardData).getData('text');
                if (paste) {
                    let currentR = parseInt(input.dataset.linha);
                    let currentC = parseInt(input.dataset.coluna);
                    let currentInput = input;
                    
                    for (let i = 0; i < paste.length; i++) {
                        const char = paste[i].toUpperCase();
                        if (/^[A-Z]$/.test(char)) {
                            currentInput.value = char;
                            
                            // Dispara o evento de input para verificação
                            const event = new Event('keydown', { key: char });
                            currentInput.dispatchEvent(event);
                            
                            // Encontra o próximo input
                            let nextR = currentR, nextC = currentC;
                            const palavra = palavrasPosicionadas.find(p => 
                                (p.direcao === 'horizontal' && currentR === p.linha && currentC >= p.coluna && currentC < p.coluna + p.palavra.length) ||
                                (p.direcao === 'vertical' && currentC === p.coluna && currentR >= p.linha && currentR < p.linha + p.palavra.length)
                            );
                            
                            if (palavra) {
                                if (palavra.direcao === 'horizontal') nextC++;
                                else nextR++;
                                
                                const nextInput = document.querySelector(`.cell input[data-linha="${nextR}"][data-coluna="${nextC}"]`);
                                if (nextInput) {
                                    currentInput = nextInput;
                                    currentR = nextR;
                                    currentC = nextC;
                                    currentInput.focus();
                                } else {
                                    break;
                                }
                            } else {
                                break;
                            }
                        }
                    }
                }
            });
                    celula.appendChild(input);
                    
                    const inicioPalavra = palavrasPosicionadas.find(p => p.linha === r && p.coluna === c);
                    if (inicioPalavra) {
                        const numeroDica = document.createElement('span');
                        numeroDica.classList.add('clue-number');
                        numeroDica.textContent = palavrasPosicionadas.indexOf(inicioPalavra) + 1;
                        celula.appendChild(numeroDica);
                    }
                } else {
                    celula.classList.add('blocked');
                }
                elementoGrid.appendChild(celula);
            }
        }
    }
    
    function renderizarImagens() {
        elementoSobreposicaoImagens.innerHTML = '';
        const cellSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--cell-size'));
        const gapSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-size'));
        const totalCellSize = cellSize + gapSize;

        palavrasPosicionadas.forEach(palavra => {
            const imagem = document.createElement('img');
            imagem.src = palavra.imagem;
            imagem.alt = `Imagem de ${palavra.palavra}`;

            let topPos = palavra.linha * totalCellSize;
            let leftPos = palavra.coluna * totalCellSize;

            if (palavra.direcao === 'horizontal') {
                leftPos -= totalCellSize;
            } else { // vertical
                topPos -= totalCellSize;
            }
            
            imagem.style.top = `${topPos}px`;
            imagem.style.left = `${leftPos}px`;

            // Adiciona evento de clique para alternar o tamanho da imagem
            imagem.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede que o clique se propague
                imagem.classList.toggle('enlarged');
            });
            
            elementoSobreposicaoImagens.appendChild(imagem);
        });
        
        // Fecha imagens ampliadas ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.matches('#image-overlay img')) {
                document.querySelectorAll('#image-overlay img').forEach(img => {
                    img.classList.remove('enlarged');
                });
            }
        });
    }

    function gerenciarInput(e) {
        const input = e.target;
        const r = parseInt(input.dataset.linha);
        const c = parseInt(input.dataset.coluna);
        
        // Se o campo já estiver correto, não permite edição
        if (input.classList.contains('correct')) {
            e.preventDefault();
            
            // Permite navegação com setas mesmo em campos corretos
            if (e.key.startsWith('Arrow')) {
                e.preventDefault();
                let nextR = r, nextC = c;
                
                if (e.key === 'ArrowRight') nextC++;
                else if (e.key === 'ArrowLeft') nextC--;
                else if (e.key === 'ArrowDown') nextR++;
                else if (e.key === 'ArrowUp') nextR--;
                
                const nextInput = document.querySelector(`.cell input[data-linha="${nextR}"][data-coluna="${nextC}"]`);
                if (nextInput) nextInput.focus();
            }
            return;
        }
        
        // Trata teclas de navegação
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || 
            e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            let nextR = r, nextC = c;
            
            if (e.key === 'ArrowRight') nextC++;
            else if (e.key === 'ArrowLeft') nextC--;
            else if (e.key === 'ArrowDown') nextR++;
            else if (e.key === 'ArrowUp') nextR--;
            
            const nextInput = document.querySelector(`.cell input[data-linha="${nextR}"][data-coluna="${nextC}"]`);
            if (nextInput) nextInput.focus();
            return;
        }
        
        // Se for backspace, limpa o campo atual e volta para o anterior
        if (e.key === 'Backspace') {
            if (input.value) {
                input.value = '';
            } else {
                // Se o campo já estiver vazio, vai para o anterior
                let prevR = r, prevC = c;
                const palavra = palavrasPosicionadas.find(p => 
                    (p.direcao === 'horizontal' && r === p.linha && c > p.coluna && c <= p.coluna + p.palavra.length) ||
                    (p.direcao === 'vertical' && c === p.coluna && r > p.linha && r <= p.linha + p.palavra.length)
                );
                
                if (palavra) {
                    if (palavra.direcao === 'horizontal') prevC--;
                    else prevR--;
                    
                    const prevInput = document.querySelector(`.cell input[data-linha="${prevR}"][data-coluna="${prevC}"]`);
                    if (prevInput && !prevInput.classList.contains('correct')) {
                        prevInput.focus();
                        prevInput.value = '';
                    }
                }
            }
            return;
        }
        
        // Se não for uma letra, não faz nada
        if (!/^[A-Za-z]$/.test(e.key)) {
            e.preventDefault();
            return;
        }
        
        // Define o valor em maiúsculo
        e.preventDefault(); // Previne o comportamento padrão para evitar duplicação
        input.value = e.key.toUpperCase();
        
        // Verifica se a letra está correta
        const palavra = palavrasPosicionadas.find(p => 
            (p.direcao === 'horizontal' && r === p.linha && c >= p.coluna && c < p.coluna + p.palavra.length) ||
            (p.direcao === 'vertical' && c === p.coluna && r >= p.linha && r < p.linha + p.palavra.length)
        );
        
        if (palavra) {
            const indice = palavra.direcao === 'horizontal' ? c - palavra.coluna : r - palavra.linha;
            if (input.value === palavra.palavra[indice]) {
                input.classList.add('correct');
                verificarPalavraAutomaticamente(palavra);
                
                // Move para o próximo campo automaticamente apenas se a letra estiver correta
                let nextR = r, nextC = c;
                
                if (palavra.direcao === 'horizontal') nextC++;
                else nextR++;
                
                const nextInput = document.querySelector(`.cell input[data-linha="${nextR}"][data-coluna="${nextC}"]`);
                if (nextInput && !nextInput.classList.contains('correct')) {
                    nextInput.focus();
                    nextInput.value = ''; // Garante que o próximo campo esteja vazio
                }
            } else {
                input.classList.remove('correct');
            }
        }
        
        verificarCondicaoVitoria();
    }

    function verificarPalavraAutomaticamente(palavra) {
        if (palavra.estaResolvida) return;

        let palpiteAtual = '';
        let tudoPreenchido = true;
        const inputs = [];

        for (let i = 0; i < palavra.palavra.length; i++) {
            let r = palavra.linha, c = palavra.coluna;
            if (palavra.direcao === 'horizontal') c += i;
            else r += i;
            
            const input = elementoGrid.querySelector(`input[data-linha='${r}'][data-coluna='${c}']`);
            if (input) {
                inputs.push(input);
                if (input.value) {
                    palpiteAtual += input.value;
                } else {
                    tudoPreenchido = false;
                }
            }
        }
        
        if (tudoPreenchido && palpiteAtual === palavra.palavra) {
            palavra.estaResolvida = true;
            inputs.forEach(input => {
                input.classList.add('correct');
                input.readOnly = true;
            });
            verificarCondicaoVitoria();
        }
    }

    function darDica() {
        const inputsNaoResolvidos = [];
        elementoGrid.querySelectorAll('input').forEach(input => {
            if (!input.readOnly && !input.value) {
                inputsNaoResolvidos.push(input);
            }
        });

        if (inputsNaoResolvidos.length > 0) {
            const inputAleatorio = inputsNaoResolvidos[Math.floor(Math.random() * inputsNaoResolvidos.length)];
            const r = parseInt(inputAleatorio.dataset.linha);
            const c = parseInt(inputAleatorio.dataset.coluna);
            inputAleatorio.value = matrizDoGrid[r][c];
            inputAleatorio.classList.add('hint');
            
            // Dispara o evento de input para processar a dica
            const event = new Event('keydown');
            event.key = inputAleatorio.value;
            inputAleatorio.dispatchEvent(event);
        }
    }
    
    function verificarCondicaoVitoria() {
        // Verifica se todas as palavras foram resolvidas
        const tudoResolvido = palavrasPosicionadas.every(palavra => {
            for (let i = 0; i < palavra.palavra.length; i++) {
                const r = palavra.direcao === 'horizontal' ? palavra.linha : palavra.linha + i;
                const c = palavra.direcao === 'horizontal' ? palavra.coluna + i : palavra.coluna;
                const input = elementoGrid.querySelector(`input[data-linha="${r}"][data-coluna="${c}"]`);
                
                if (!input || input.value !== palavra.palavra[i]) {
                    return false;
                }
            }
            return true;
        });
        
        if (tudoResolvido) {
            console.log('Todas as palavras foram resolvidas!');
            elementoMensagem.textContent = "";
            mostrarPopupVitoria();
        }
        
        return tudoResolvido;
    }

    // Elementos do popup
    let victoryPopup, closePopupBtn;

    // Inicializar elementos do popup
    function inicializarPopup() {
        victoryPopup = document.getElementById('victory-popup');
        closePopupBtn = document.getElementById('close-popup');
        
        // Garantir que o popup esteja inicialmente oculto
        if (victoryPopup) {
            victoryPopup.style.display = 'none';
        }
    }

    // Função para mostrar o popup de vitória
    function mostrarPopupVitoria() {
        console.log('Mostrando popup de vitória');
        if (!victoryPopup) {
            console.log('Inicializando popup...');
            inicializarPopup();
        }
        
        if (victoryPopup) {
            console.log('Exibindo popup...');
            victoryPopup.style.display = 'flex';
            // Força o navegador a processar a mudança de display antes de adicionar a classe active
            setTimeout(() => {
                victoryPopup.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Popup deve estar visível agora');
                
                // Verifica se o popup está visível
                console.log('Estilo do popup:', window.getComputedStyle(victoryPopup).display);
            }, 10);
        } else {
            console.error('Elemento do popup não encontrado!');
        }
    }

    // Função para fechar o popup
    function fecharPopup() {
        if (victoryPopup) {
            victoryPopup.classList.remove('active');
            setTimeout(() => {
                victoryPopup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300); // Tempo da animação de saída
        }
    }

    // Inicializar popup e configurar eventos
    function configurarEventos() {
        // Inicializar elementos do popup
        inicializarPopup();
        
        // Configurar evento para o botão de novo jogo
        if (botaoNovoJogo) {
            botaoNovoJogo.removeEventListener('click', reiniciarJogo);
            botaoNovoJogo.addEventListener('click', reiniciarJogo);
        }
        
        // Configurar evento para o botão de dica
        if (botaoDica) {
            botaoDica.removeEventListener('click', darDica);
            botaoDica.addEventListener('click', darDica);
        }
        
        // Configurar evento para o botão de fechar popup
        if (closePopupBtn) {
            closePopupBtn.removeEventListener('click', reiniciarJogo);
            closePopupBtn.addEventListener('click', reiniciarJogo);
        }
        
        // Fechar popup ao clicar fora do conteúdo
        if (victoryPopup) {
            victoryPopup.removeEventListener('click', fecharAoClicarFora);
            victoryPopup.addEventListener('click', fecharAoClicarFora);
        }
        
        // Fechar popup com a tecla ESC
        document.removeEventListener('keydown', fecharComEsc);
        document.addEventListener('keydown', fecharComEsc);
    }
    
    // Função para reiniciar o jogo
    function reiniciarJogo(e) {
        if (e) e.stopPropagation();
        fecharPopup();
        iniciarJogo();
    }
    
    // Função para fechar ao clicar fora do conteúdo
    function fecharAoClicarFora(e) {
        if (e.target === victoryPopup) {
            reiniciarJogo(e);
        }
    }
    
    // Função para fechar com a tecla ESC
    function fecharComEsc(e) {
        if (e.key === 'Escape' && victoryPopup && victoryPopup.classList.contains('active')) {
            reiniciarJogo(e);
        }
    }
    
    // Inicializar quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', configurarEventos);
    
    // Também configurar eventos imediatamente (caso o DOM já esteja carregado)
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(configurarEventos, 1);
    } else {
        document.addEventListener('DOMContentLoaded', configurarEventos);
    }
    
    // Recalcular imagens ao redimensionar a janela
    window.addEventListener('resize', renderizarImagens);

    // Iniciar o jogo
    iniciarJogo();
});
