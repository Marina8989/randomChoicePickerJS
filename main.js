const textarea = document.querySelector('#textarea');
const tags = document.querySelector('.tags');


textarea.addEventListener('keyup', (event) => {
    getValue(event.target.value);
    pressedEnter(event.key);
})

function getValue(input) {
    const text = input.split(',').filter(item => item.trim() !== '').map(item => item.trim());
    //console.log(text);
    tags.innerText = '';

    text.forEach(tag => {
        console.log(tag)
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tag;

        tags.append(span);
    })

     
}
//Know when enter is pressed
//randomly pick a tag for sometime
//pick for final iteration

function pressedEnter(action){

  setTimeout(() => {

          console.log('lalala');
  }, 100);
}


