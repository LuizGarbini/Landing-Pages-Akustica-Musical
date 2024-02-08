// Espera até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona evento de clique ao botão de reprodução do vídeo
  document
    .querySelector('.trevl-play-button')
    .addEventListener('click', function () {
      // Alterna a visibilidade do iframe
      var iframe = document.getElementById('video-iframe');
      iframe.style.display = iframe.style.display == 'none' ? 'block' : 'none';
    });

  // Adiciona evento de clique às miniaturas dos vídeos e ao texto
  document.querySelectorAll('.trevl-thumbnail, .trevlDescriptionVideoThumbnail').forEach((element) => {
    element.addEventListener('click', function () {
      // Obtém o ID do vídeo associado ao elemento clicado
      var videoId = this.getAttribute('data-video');
      // Atualiza o src do iframe com o vídeo selecionado
      document.getElementById('video-iframe').src =
        'https://www.youtube.com/embed/' + videoId;
    });
  });
});