// Adiciona evento de clique ao botão de reprodução do vídeo
document
  .querySelector('.trevl-play-button')
  .addEventListener('click', function () {
    // Alterna a visibilidade do iframe
    var iframe = document.getElementById('video-iframe');
    iframe.style.display = iframe.style.display == 'none' ? 'block' : 'none';
  });

// Adiciona evento de clique às miniaturas dos vídeos
document.querySelectorAll('.trevl-thumbnail').forEach((thumbnail) => {
  thumbnail.addEventListener('click', function () {
    // Obtém o ID do vídeo associado à miniatura clicada
    var videoId = this.getAttribute('data-video');
    // Atualiza o src do iframe com o vídeo selecionado
    document.getElementById('video-iframe').src =
      'https://www.youtube.com/embed/' + videoId;
  });
});
