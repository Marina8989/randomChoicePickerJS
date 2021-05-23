const textarea = document.querySelector('#textarea');
const tags = document.querySelector('.tags');


textarea.addEventListener('keyup', (event) => {
    getValue(event.target.value);
})

function getValue(input) {
    const text = input.split(',').filter(item => item.trim() !== '').map(item => item.trim());
    //console.log(text);
    text.forEach(tag => {
        console.log(tag)
        // const span = document.createElement('span');
        // span.classList.add('tag');
        

        // tags.append(span);
    })
}