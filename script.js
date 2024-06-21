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

document.addEventListener("DOMContentLoaded", function() {
        // Index of pages and their contents
        var pages = {
            "./docs/introduction.html": "",
            "./docs/installation.html": "",
            "./docs/simulation.html": "",
            "./docs/robots.html": "",
            "./docs/ardrone.html": "",
            "./docs/ardrone-math.html": "",
            "./docs/ardrone-variables.html": "",
            "./docs/ardrone-sensors.html": "",
            "./docs/ardrone-controllers.html": "",
            "./docs/pioneer.html": "",
            "./docs/pioneer-math.html": "",
            "./docs/pioneer-variables.html": "",
            "./docs/pioneer-sensors.html": "",
            "./docs/pioneer-controllers.html": "",
            "./docs/bebop.html": "",
            "./docs/bebop-math.html": "",
            "./docs/bebop-var.html": "",
            "./docs/bebop-sensors.html": "",
            "./docs/bebop-controllers.html": "",
            "./docs/environment.html": "",
            "./docs/graphics.html": "",
            "./docs/tools.html": "",
            "./docs/tools-ros.html": "",
            "./docs/tools-optitrack.html": ""
        };
    
        // Function to load initial content of pages into the index
        function loadPages() {
            $.each(pages, function(page, content) {
                $.get(page, function(data) {
                    pages[page] = $(data).text().toLowerCase();
                });
            });
        }
    
        // Call loadPages function to load all page contents
        loadPages();
    
        // Function to load a page
        function loadPage(page) {
            $('#content').load(page);
        }
    
        // Load initial page
        loadPage('./docs/introduction.html');
    
        // Add click event to links in nav bar
        $('.nav-link').on('click', function(event) {
            event.preventDefault();
    
            // Remove 'nav-link-active' class from all links
            $('.nav-link').removeClass('nav-link-active');
    
            // Add 'nav-link-active' class to accessed link 
            $(this).addClass('nav-link-active');
    
            // Load the corresponding page
            var page = $(this).data('page');
            loadPage(page);
        });
    
        // Search function triggered by Enter key
        $('#search').on('keypress', function(event) {
            if (event.which == 13) {  // Enter key pressed
                event.preventDefault();
                var searchTerm = $(this).val().toLowerCase();
                if (searchTerm.length > 2) {
                    var results = [];
                    var found = false;
                    $.each(pages, function(page, content) {
                        var index = content.indexOf(searchTerm);
                        if (index !== -1) {
                            found = true;
                            // Extract title (first line of page)
                            var title = content.split('\n')[0];
                            
                            // Extract snippet with search term
                            var start = Math.max(index - 30, 0);
                            var end = Math.min(index + searchTerm.length + 30, content.length);
                            var snippet = content.substring(start, end);
                            snippet = highlightText(snippet, searchTerm); // Highlight search term
    
                            results.push(`
                                <li>
                                    <a href="#" class="nav-link" data-page="${page}">
                                        <h4>${title}</h4>
                                        <p>...${snippet}...</p>
                                    </a>
                                </li>
                            `);
                        }
                    });

                    if (found) {
                        $('#content').html('<ul>' + results.join('') + '</ul>');
                    } else {
                        $('#content').html('<h3>Nenhum resultado foi encontrado.</h3>');
                    }
    
                    // Add click event to new links
                    $('#content a.nav-link').on('click', function(event) {
                        event.preventDefault();
                        var page = $(this).data('page');
                        loadPage(page);
                    });
                } else {
                    // If search term is empty or too short, clear results
                    $('#content').html('<h3>Busque por um termo com mais caracteres.</h3>');
                }
            }
        });
    
        // Function to highlight search term in snippet
        function highlightText(snippet, searchTerm) {
            var regex = new RegExp(searchTerm, 'gi');
            return snippet.replace(regex, '<span class="bold">$&</span>');
        }
    });
    