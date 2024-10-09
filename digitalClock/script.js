const clock = document.querySelector(".clock");


setInterval(()=> {
    const  time = new Date();
    
    clock.innerHTML = time.toLocaleTimeString()
},1000)