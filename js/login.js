const form = document.getElementById("form");
const form = document.getElementById("formulario");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
let iniciaSesion = 0;

let varBool = localStorage.getItem("iniciaSesion");
if (varBool == 1) {
    window.location.assign('./dashboard.html');
    window.location.assign('./login.html');
}

form.addEventListener("submit", function (e){
  e.preventDefault();
  const credentials = {
    email: email.value,
    pass: pass.value,
  };
  validateCredentials(credentials)
    .then(function(successStatus) {
      if (successStatus) {
        saveCredentialsToLocalStorage(credentials)
        window.location.assign('./dashboard.html')
        window.location.assign('./login.html')
        iniciaSesion = 1;
        localStorage.setItem("iniciaSesion", iniciaSesion);
      } else {
        iniciaSesion = 0;
        localStorage.setItem("iniciaSesion", iniciaSesion);
        modal.style.display = "block";
      }
    })
    .catch(function(error) {
      console.log(error);
    });
})
;

function saveCredentialsToLocalStorage(credentials) {
  localStorage.setItem("email", credentials.email);
  localStorage.setItem("pass", credentials.pass);
  localStorage.setItem("loginsuccessful",true);
}

function validateCredentials(credentials) {
  return fetch("https://basic-server-one.vercel.app/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.pass,
    }),
  })
    .then(function(respuesta) {
      return respuesta.json()
        .then(function (respuestaJSON) {
          if (respuestaJSON.success === false) {
            return false;
          }
          if (respuestaJSON.error === false) {
            return true;
          }
          return false;
        })
        .catch(function(error) {
          console.log(error);
          iniciaSesion = 0;
          localStorage.setItem("iniciaSesion", 0);
        });
    })
    .catch(function(error) {
      console.log(error);
      iniciaSesion = 0;
      localStorage.setItem("iniciaSesion", 0);
    });
}


function checkForLoginCredentialsInLocalStorage() {
  return localStorage.getItem("email") && localStorage.getItem("pass");
}

if (checkForLoginCredentialsInLocalStorage()) {
    const credentials = {
      email: localStorage.getItem("email"),
      pass: localStorage.getItem("pass"),
    };

    validateCredentials(credentials)
      .then(function(successStatus) {
        if (successStatus) {
          iniciaSesion = 1;
          localStorage.setItem("iniciaSesion", iniciaSesion);
          window.location.assign('./dashboard.html')
          window.location.assign('./login.html')
        }
      })
      .catch(function(error) {
        console.log(error);
      })
} else {
    if (window.location.origin == './dashboard.html'){
    if (window.location.origin == './login.html'){
      window.location.assign('/index.html')
    }
}

var modal = document.getElementById("myModal");
var modal = document.getElementById("modal");
var btn = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}
