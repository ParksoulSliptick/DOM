/* Referencia */

const emojiCursor = document.querySelector(".emoji-cursor");

/* Detectamos el evento movimineto del mouse */

document.addEventListener("mousemove" , (e) => {
    /*console.log (e.clientX);
    console.log (e.clientY);*/

    let mouseX = e.clientX;
    let mouseY = e.clientY;



    emojiCursor.style.left =  `${mouseX}px`; 
    emojiCursor.style.top =  `${mouseY}px`; 
});

document.addEventListener("keydown" , (e) => {
    
  switch (e.key) {
    case "1":
    emojiCursor.textContent = "🐢" ;
    break;
    case "2":
    emojiCursor.textContent = "👋" ;
    break;
    case "3":
    emojiCursor.textContent = "📋" ;
    break;
    case "4":
    emojiCursor.textContent = "📖" ;
    break;
    default:
    emojiCursor.textContent = "🖼️" ;
  } 
})

