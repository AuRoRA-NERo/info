//Função que alterna entre os modos dark e ligth
document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const toggle = document.getElementById("toggle");
    const icon = document.getElementById("toggle-icon");
    const darkMode = localStorage.getItem("dark-mode");

    if (darkMode) {
        root.classList.add("dark-theme");
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
    }

    toggle.addEventListener("click", () => {
        root.classList.toggle("dark-theme");

        if (icon.classList.contains("fa-moon-o")) {
            icon.classList.remove("fa-moon-o");
            icon.classList.add("fa-sun-o");
        } else {
            icon.classList.remove("fa-sun-o");
            icon.classList.add("fa-moon-o");
        }

        if (root.classList.contains("dark-theme")) {
            localStorage.setItem("dark-mode", true);
        } else {
            localStorage.removeItem("dark-mode");
        }
    });
});

//Função que copia o código
function copy_data(containerid) {
    var range = document.createRange();
    range.selectNode(containerid); //changed here
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById('copy-alert').style.display = "block";
    setTimeout(function () {
        $('#copy-alert').fadeOut('slow');
    }, 1000);
    $('#GFG').text("Div hides after 1 second.");
}

//Função que expande as sub listas no menu de navegação
function expand_list(button) {
    var subNavBar = button.nextElementSibling; // Pega a ul irmã do botão clicado
    var icon = button.querySelector('i'); // Pega o ícone dentro do botão

    if (subNavBar.style.display === 'none' || subNavBar.style.display === '') {
        subNavBar.style.display = 'block'; // Mostra a lista
        icon.classList.remove('fa-caret-down'); // Remove a classe do ícone para baixo
        icon.classList.add('fa-caret-up'); // Adiciona a classe do ícone para cima
    } else {
        subNavBar.style.display = 'none'; // Oculta a lista
        icon.classList.remove('fa-caret-up'); // Remove a classe do ícone para cima
        icon.classList.add('fa-caret-down'); // Adiciona a classe do ícone para baixo
    }
}

// // Função para remover acentos de uma string
// function removeAccents(str) {
//     return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// }

// function search() {
//     // Obtém o termo de pesquisa inserido pelo usuário
//     var searchTerm = document.getElementById("search").value.toLowerCase();
    
//     // Obtém todos os elementos de texto onde a pesquisa será realizada
//     var contentElements = document.querySelectorAll(".content p, .content .code");

//     // Limpa o resultado anterior
//     document.getElementById("result").innerHTML = "";
    
//     // Se a barra de pesquisa estiver vazia, oculta a div de resultados e sai da função
//     if (searchTerm.trim() === "") {
//         document.getElementById("result").style.display = "none";
//         return;
//     }
    
//     // Itera sobre os elementos de texto para realizar a pesquisa
//     var hasResults = false;
//     contentElements.forEach(function(element, index) {
//         var content = element.innerText.toLowerCase();
        
//         // Remove acentos do conteúdo para ignorá-los na comparação
//         var normalizedContent = removeAccents(content);
//         var normalizedSearchTerm = removeAccents(searchTerm);
        
//         // Se o termo de pesquisa for encontrado no conteúdo, exibe o resultado como um link
//         if (normalizedContent.includes(normalizedSearchTerm)) {
//             hasResults = true;
//             var resultItem = document.createElement("div");
//             resultItem.classList.add("search-result-item");
//             resultItem.innerHTML = getSearchResultSnippet(content, searchTerm);
//             resultItem.setAttribute("data-index", index);
//             resultItem.onclick = function() {
//                 scrollToResult(index);
//             };
//             document.getElementById("result").appendChild(resultItem);
//         }
//     });
    
//     // Se não houver resultados, oculta a div de resultados
//     if (!hasResults) {
//         document.getElementById("result").style.display = "none";
//     } else {
//         document.getElementById("result").style.display = "block";
//     }
// }

// // Função para obter um trecho de resultado de pesquisa com o termo pesquisado destacado
// function getSearchResultSnippet(content, searchTerm) {
//     // Define o número de caracteres antes e depois do termo de pesquisa para o trecho
//     var snippetLength = 50;
    
//     // Remove os acentos do termo de pesquisa e do conteúdo
//     var normalizedSearchTerm = removeAccents(searchTerm.toLowerCase());
//     var normalizedContent = removeAccents(content.toLowerCase());
    
//     // Encontra a posição do termo de pesquisa no conteúdo normalizado
//     var startIndex = normalizedContent.indexOf(normalizedSearchTerm);
    
//     // Extrai o trecho do conteúdo ao redor do termo de pesquisa
//     var snippetStart = Math.max(0, startIndex - snippetLength);
//     var snippetEnd = Math.min(content.length, startIndex + searchTerm.length + snippetLength);
    
//     // Retorna o trecho com o termo de pesquisa grifado em amarelo
//     return "... " + 
//            content.substring(snippetStart, startIndex) + 
//            "<span style='font-weight: bold;'>" + 
//            content.substring(startIndex, startIndex + searchTerm.length) + 
//            "</span>" + 
//            content.substring(startIndex + searchTerm.length, snippetEnd) + 
//            " ...";
// }

// // Função para rolar até o resultado clicado
// function scrollToResult(index) {
//     // Obtém todos os elementos de texto onde a pesquisa será realizada
//     var contentElements = document.querySelectorAll(".content p, .content .code");
    
//     // Obtém o elemento de conteúdo correspondente ao índice
//     var targetElement = contentElements[index];
    
//     // Rola a tela até o elemento de conteúdo correspondente
//     if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        
//         // Destaca a palavra buscada no conteúdo correspondente
//         highlightSearchTerm(targetElement);
//     }
    
//     // Limpa os resultados de pesquisa após rolar para o elemento
//     clearResults();
// }


// // Função para limpar os resultados de pesquisa
// function clearResults() {
//     document.getElementById("result").innerHTML = "";
//     document.getElementById("result").style.display = "none";
// }