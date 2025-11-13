const estrelas = document.querySelectorAll('.estrela'); //pega todas as tegs com a classe estrela

        estrelas.forEach(estrela => { //para cada estrela dentro de estrelas
            estrela.addEventListener('click', () => { //espere um evento de click 
                const estrelaClicada = parseInt(estrela.getAttribute('numero')); //pega o estrelaClicada de cada estrela dentro de 'estrelas' e converte para inteiro
                estrelas.forEach(e => { //passa por cada estrela e pega o numero dela
                    if (parseInt(e.getAttribute('numero')) <= estrelaClicada) { //verifica se o numero da estrela clicada é menor ou igual a estrela atual. ELE PINTA estrelaClicada e todas as outras estrelas antes dela(menor ou igual). se a clicada for 3, as estrelas anteriores a ela serao pintadas, ex: 3, 2, 1.
                        e.classList.add('preenchida'); //adiciona a classe '.preenchida'
                    } else { //deixa em brancos todas as estrelas que fica logo após a estrela clicada.
                        e.classList.remove('preenchida'); //remove a classe '.preenchida'
                    }
                });
            });
        });