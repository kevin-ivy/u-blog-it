function login() {
    location.href = "/dashboard";
  }

function home() {
    location.href="/";
}


document.querySelector('#home').addEventListener('click', home); 
document.querySelector('#dashboard').addEventListener('click', login);
  