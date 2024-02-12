function openModal(videoId) {
  var modal = document.getElementById('videoModal');
  var modalVideo = document.getElementById('modalVideo');
  modalVideo.src =
    'https://www.youtube.com/embed/' + videoId + '?autoplay=1' + '&showinfo=0';
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('videoModal');
  var modalVideo = document.getElementById('modalVideo');
  modal.style.display = 'none';
  modalVideo.src = '';
}
