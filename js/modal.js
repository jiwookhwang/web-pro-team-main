function openModal() {
    document.getElementById('LIKE').style.display = 'block';
  }


  function closeModal() {
    document.getElementById('LIKE').style.display = 'none';
  }


  window.onclick = function (event) {
    const modal = document.getElementById('LIKE');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };