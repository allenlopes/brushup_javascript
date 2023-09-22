const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(evnt){
        console.log(evnt);
        console.log(evnt.target);
        if(evnt.target.id === 'grey'){
            body.style.backgroundColor = evnt.target.id;
        }
        if(evnt.target.id === 'white'){
            body.style.backgroundColor = evnt.target.id;
        }
        if(evnt.target.id === 'blue'){
            body.style.backgroundColor = evnt.target.id;
        }
        if(evnt.target.id === 'yellow'){
            body.style.backgroundColor = evnt.target.id;
        }
        if(evnt.target.id === 'purple'){
            body.style.backgroundColor = evnt.target.id;
        }
    })
});