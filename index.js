const cells = document.querySelectorAll('td');

for (let cell of cells) {
    cell.addEventListener('click', () => {
        console.log('cell clicked')

    })
}