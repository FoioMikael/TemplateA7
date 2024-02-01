const main = document.getElementById("main")
let itens = ''
for (let index = 0; index < 12; index++) {
    itens += `
   
       <div class="Prime a7">
           <div class="Titulo">
               FILA
           </div>
           <div class="Corpo">
               Única
           </div>
           <img class="Img" alt="img"
               src="https://i.pinimg.com/originals/95/3d/6c/953d6c0a8026ae79e81a689692428c6f.png" />
       </div>
            `
}

main.innerHTML = itens