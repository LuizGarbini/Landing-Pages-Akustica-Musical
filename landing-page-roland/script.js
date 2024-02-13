function openModal(videoId) {
  let modal = document.getElementById('videoModal');
  let modalVideo = document.getElementById('modalVideo');
  let modalBodyOverflow = document.querySelector('body')
  modalVideo.src =
    'https://www.youtube.com/embed/' + videoId + '?autoplay=1' + '&showinfo=0';
  modal.style.display = 'block';
  modalBodyOverflow.style.overflow = 'hidden';
}

function closeModal() {
  let modal = document.getElementById('videoModal');
  let modalVideo = document.getElementById('modalVideo');
  let modalBodyOverflow = document.querySelector('body')
  modal.style.display = 'none';
  modalVideo.src = '';
  modalBodyOverflow.style.overflow = 'auto';
}

function openCustomModal(modalId) {
  let modal = document.getElementById(modalId);
  let modalBodyOverflow = document.querySelector('body')
  modal.style.display = 'block';
  modalBodyOverflow.style.overflow = 'hidden';
}

function closeCustomModal(modalId, event) {
  let modal = document.getElementById(modalId);
  let closeButton = document.querySelector('#' + modalId + ' .close');
  let modalBodyOverflow = document.querySelector('body')
  if (event.target === modal || event.target === closeButton) {
    modal.style.display = 'none';
    modalBodyOverflow.style.overflow = 'auto';
  }
}
