function login() {
    location.href = "/login";
  }

function home() {
    location.href="/";
}


document.querySelector('#home').addEventListener('click', home); 
document.querySelector('#login').addEventListener('click', login);
  