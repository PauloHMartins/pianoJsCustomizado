document.body.addEventListener('keyup', (event)=>{ /*Crio um observador para 
  verificar qual tecla estou apertando */
  playSound( event.code.toLowerCase() ); /*ESta funcão criada vai reproduzir sons conforme 
  a tecla reconhecida pelo Event KEYUP.code e com a função LoweCase tranforma 
  em letras minusculas para reconhecer os sons cadastrados tb em letras minusculas
   */
});

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value; /*primeiro recebe o input onde 
  sera digitado a sequencia da musica dentro da variavel Song . depois verifica
  se foi digitado algo  atraves do if
  apos isso com o uso do split reparte a sequencia digitada em casa letra
  num array SongArray para posteriormente reproduzir cada som da string separada */

  if(song !== '') {
    let songArray = song.split('');
    playComposition(songArray); //cria a função que vai reproduzir a musica
  }
  

});

function playSound(sound) {
  let audioElement = document.querySelector( `#s_${sound}` ); /*atribuo a variavel 
  audioElement o item atribuido no HTML .como é dinamico insiro as iniciais 
  que repetem no id 's_' e passo via template string o nome da variavel. */
  let keyElement = document.querySelector( `div[data-key="${sound}"]` );

  // agora verifico se a tecla apertada é uma das que há som atribuido
  if(audioElement) { 
    audioElement.currentTime = 0; // encerra o som ao teclar outra tecla
    audioElement.play();

  }

  //verifica qual tecla foi apertada novamente porem agora utiliza uma 
  //class do CSS para mostrar no DOM qual foi a tecla apertada ao usuario
  if(keyElement) {
    keyElement.classList.add('active');

    setTimeout(()=> { /*Utiliza a função que defini algo em determinado tempo para que
      apos 300 milisegundos remover a class active que altera o DOM INFORMANDO a tecla 
      apertada */
      keyElement.classList.remove('active');

    },300);
  };

};

function playComposition(songArray) {
  let wait = 0;
  for ( let songItem of songArray ) {
    setTimeout( ()=>{
      playSound( `key${songItem}` );

    },wait);
    wait += 350;

    

  }
}