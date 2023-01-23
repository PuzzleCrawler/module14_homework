function submitNumber() {
    const numberInput = document.querySelector('#numberInput').value;
    const responseDiv = document.querySelector('#response');
    if (numberInput < 1 || numberInput > 10) {
      responseDiv.innerHTML = 'Число вне диапазона от 1 до 10';
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://picsum.photos/v2/list?limit=${numberInput}`);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          let images = '';
          data.forEach(image => {
            images += `<img src="${image.download_url}" alt="image">`;
          });
          responseDiv.innerHTML = images;
        } else {
          responseDiv.innerHTML = 'Error getting images';
        }
      };
      xhr.send();
    }
  }