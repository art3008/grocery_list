const items = document.getElementById('groceryItems')
const usrInp = document.getElementById('usrInput')
const clearItem = document.getElementById('clrItem')
const addItem = document.getElementById('addItem')
let boo = true


usrInp.addEventListener('keydown', (event) => {

    if(event.key == 'Enter') {
       usrInp.value.length === 0 ? alert('Поле ввода пустое') : add()
    }
    
})

clearItem.addEventListener('click', () => {
    items.innerHTML = ''
})


function add() {
    let h2 = document.createElement('h2')
    
    h2.innerHTML = '- ' + usrInp.value

    items.appendChild(h2)

    usrInp.value = ''

    h2.addEventListener('click',() => {
        
        boo = !boo
        boo === true ? h2.style.textDecoration = 'line-through' : h2.style.textDecoration = 'none' 
    })
}





