function login() {
    location.href = "/login";
  }

function home() {
    location.href="/";
}
  
  document.querySelector('#login').addEventListener('click', login);
  document.querySelector('#home').addEventListener('click', home);