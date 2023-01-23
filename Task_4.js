function submitImage() {
    const widthInput = document.querySelector('#widthInput').value;
    const heightInput = document.querySelector('#heightInput').value;
    const responseDiv = document.querySelector('#response');
    responseDiv.innerHTML = '';
    if (widthInput < 100 || widthInput > 300 || heightInput < 100 || heightInput > 300 || isNaN(widthInput) || isNaN(heightInput)) {
      responseDiv.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
      fetch(`https://picsum.photos/${widthInput}/${heightInput}`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        responseDiv.appendChild(img);
      })
      .catch(error => {
        responseDiv.innerHTML = 'Error getting image';
      });
    }
  }