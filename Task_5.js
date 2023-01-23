const form = document.querySelector("form");
const pageInput = document.querySelector("#page-input");
const limitInput = document.querySelector("#limit-input");
const error = document.querySelector("#error");
const result = document.querySelector("#result");

form.addEventListener("submit", async e => {
  e.preventDefault();
  error.innerHTML = "";
  result.innerHTML = "";

  const page = pageInput.value;
  const limit = limitInput.value;
  localStorage.setItem("page", page);
  localStorage.setItem("limit", limit);

  if (page < 1 || page > 10 || isNaN(page)) {
    if (limit < 1 || limit > 10 || isNaN(limit)) {
      error.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else {
      error.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    }
    return;
  }

  if (limit < 1 || limit > 10 || isNaN(limit)) {
    error.innerHTML = "Лимит вне диапазона от 1 до 10";
    return;
  }

  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  const data = await response.json();

  data.forEach(image => {
    result.innerHTML += `<img src="${image.download_url}" alt="image">`;
  });
});

if (localStorage.getItem("page") && localStorage.getItem("limit")) {
  pageInput.value = localStorage.getItem("page");
  limitInput.value = localStorage.getItem("limit");
  form.dispatchEvent(new Event("submit"));
}
