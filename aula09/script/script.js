const botao = document.getElementById('meuBotao')
const imagem = document.getElementById('imagem')


botao.addEventListener('mouseover', () => {
   const imgSeta = document.createElement ('img')
   imgSeta.src = 'seta.png'
   imgSeta.style.width = '20px'
   botao.appendChild(imgSeta)

   
})