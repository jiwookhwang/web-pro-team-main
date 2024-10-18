function openModal3() {
    document.getElementById('HOBBY').style.display = 'block';
  }


  function closeModal3() {
    document.getElementById('HOBBY').style.display = 'none';
  }


  window.onclick = function (event) {
    const modal3 = document.getElementById('HOBBY');
    if (event.target == modal3) {
      modal3.style.display = 'none';
    }
  };