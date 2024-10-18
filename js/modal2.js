function openModal2() {
    document.getElementById('MAJOR').style.display = 'block';
  }


  function closeModal2() {
    document.getElementById('MAJOR').style.display = 'none';
  }


  window.onclick = function (event) {
    const modal2 = document.getElementById('MAJOR');
    if (event.target == modal2) {
      modal2.style.display = 'none';
    }
  };