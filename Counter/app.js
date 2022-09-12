// defini a contagem inicial 
let count = 0;

// selecionar valor e botões
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        
        // valores
        if(styles.contains('decrease')) {
            count--;
        }
        if(styles.contains('increase')) {
            count++;
        }
        if(styles.contains('reset')) {
            count = 0;
        }

        // cores
        if(count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = '#222'
        }
        value.textContent = count;
    });
});