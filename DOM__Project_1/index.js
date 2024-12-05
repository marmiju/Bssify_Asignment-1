
    const audio= [
    new Audio('./sounds/crash.mp3'),
    new Audio('./sounds/kick-bass.mp3'),
    new Audio('./sounds/snare.mp3'),
    new Audio('./sounds/tom-1.mp3'),
    new Audio('./sounds/tom-2.mp3'),
    new Audio('./sounds/tom-3.mp3'),
    new Audio('./sounds/tom-4.mp3'), 
    ];
     const word =['w','a','s','d','j','k','l'];


    document.addEventListener('keyup', handleKeyUp);

    function handleKeyUp(event) {
        const pressed = event.key.toLowerCase();
        playsound(pressed)
    
    }


    const playsound = (key)=>{
      const index = word.indexOf(key);
      if(index!== -1 ){
        audio[index].play();
      }
      const button = document.getElementById(key);
      if(button){
        button.classList.add('pressed');
        setTimeout(()=>{
            button.classList.remove('pressed');
        },100)
      }

      
    }


   
 
