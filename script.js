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
