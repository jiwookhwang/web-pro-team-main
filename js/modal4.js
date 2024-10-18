function openModal4() {
    document.getElementById('DREAM').style.display = 'block';
  }


  function closeModal4() {
    document.getElementById('DREAM').style.display = 'none';
  }


  window.onclick = function (event) {
    const modal4 = document.getElementById('DREAM');
    if (event.target == modal4) {
      modal4.style.display = 'none';
    }
  };