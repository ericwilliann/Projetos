// document.addEventListener('DOMContentLoaded', function() {
//     const toggles = document.querySelectorAll('.section-toggle');

//     toggles.forEach(toggle => {
//         toggle.addEventListener('click', function() {
//             const parallaxSection = this.closest('.parallax');
//             const target = document.querySelector(this.getAttribute('data-target'));

//             if (parallaxSection.classList.contains('expanded')) {
//                 parallaxSection.classList.remove('expanded');
//             } else {
//                 document.querySelectorAll('.parallax').forEach(section => section.classList.remove('expanded'));
//                 parallaxSection.classList.add('expanded');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const navbarBrand = document.querySelector('.navbar-brand');

    navbarBrand.addEventListener('click', function() {
        // Adiciona uma classe para iniciar uma animação (exemplo simples)
        this.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.section-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));

            // Remove a classe de exibição de outras descrições
            document.querySelectorAll('.description').forEach(desc => {
                if (desc !== target) {
                    desc.classList.remove('show');
                    desc.style.display = 'none';
                }
            });

            // Alterna a classe para mostrar ou ocultar a descrição
            if (target.classList.contains('show')) {
                target.classList.remove('show');
                target.style.display = 'none';
            } else {
                target.classList.add('show');
                target.style.display = 'block';
            }
        });
    });
});
