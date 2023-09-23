const clock = document.getElementById('clock') // we can also take it in querySelector as document.querySelector('#clock')

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)