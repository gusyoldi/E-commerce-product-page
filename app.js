
let count = 0

// Selecting elements
const counter = document.querySelector('#counter')
const incrementBtn = document.querySelector('#increment')
const decrementBtn = document.querySelector('#decrement')
const menuBtn = document.querySelector('#menu')

const increment = () => {
    count += 1
    counter.value = count
}

const decrement = () => {
    count -= 1
    counter.value = count
}

const openSidebar = () => {
    alert('Open sidebar!');
}

incrementBtn.addEventListener('click', () => {
    increment();
    console.log(count)
})

decrementBtn.addEventListener('click', () => {
    if(count < 1) return
    decrement();
    console.log(count)
})

menuBtn.addEventListener('click', () => {
    openSidebar()
})
