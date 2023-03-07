window.onload = function () {
  var error='';
  var nombre = document.getElementById('nombreInput');
  var errorNombre = document.getElementById('errorNombre');
  nombre.onfocus=function () {
      nombre.style.borderColor= "#ffffff"; 
      errorNombre.style.display='none';
  }
  var apellido = document.getElementById('apellidoInput');
  var errorApellido = document.getElementById('errorApellido');
  apellido.onfocus=function () {
     apellido.style.borderColor= "#ffffff"; 
     errorApellido.style.display='none';
  }    
  function validaLetras(letter,errorLetter,e){
      expr=/^([a-zA-Z])*$/;
      if(letter.value.length > 2){
          if (!expr.test(letter.value)) {
              letter.style.borderColor= "red";
              errorLetter.style.display='block';
              errorLetter.innerHTML="Sólo letras en este campo";
              error = true;
          }
      }else{
          letter.style.borderColor= "red";
          errorLetter.style.display='block';
          errorLetter.innerHTML='El campo debe contener más de 2 caracteres';
          error = true;
      }
  }
  var email = document.getElementById('emailInput');
  var errorEmail = document.getElementById('errorEmail');
  email.onfocus=function () {
      email.style.borderColor= "#ffffff"; 
      errorEmail.style.display='none';
  }
  function validaEmail(e) {
      expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!expr.test(email.value) || email ==="") {
          email.style.borderColor= "red";
          errorEmail.style.display='block';
          errorEmail.innerHTML='Debe ingresar un e-mail válido';
          error = true;
      }
  }

  var reemail = document.getElementById('reemailInput');
  var errorReemail = document.getElementById('errorReemail');
  reemail.onfocus=function () {
      reemail.style.borderColor= "#ffffff"; 
      errorReemail.style.display='none';
  }
  function validaReemail(e) {
      if (reemail.value !== email.value) {
          reemail.style.borderColor= "red";
          errorReemail.style.display='block';
          errorReemail.innerHTML='Los e-mail ingresados deben coincidir';
          error = true;
      }
  }

  function validaPass(e){
    var pass = document.getElementById('contrasenaInput');
    var errorPass = document.getElementById('errorContrasena');
    if(pass.value.length < 6){
      pass.style.borderColor= "red";
      errorPass.style.display='block';
      errorPass.innerHTML='La contraseña debe contener más de 6 caracteres';
      error = true;
    }
  }

  function validaRepass(e){
    var repass = document.getElementById('recontrasenaInput');
    var pass = document.getElementById('contrasenaInput');
    var errorRepass = document.getElementById('errorRecontrasena');
    if(repass.value !== pass.value){
      repass.style.borderColor= "red";
      errorRepass.style.display='block';
      errorRepass.innerHTML='Las contraseñas ingresadas deben coincidir';
      error = true;
    }
  }

  var form = document.getElementById("formulario");
  form.addEventListener('submit', function (evento) {
      error=false;
      evento.preventDefault();
      validaLetras(nombre,errorNombre);
      validaLetras(apellido,errorApellido);
      validaEmail();
      validaReemail();
      validaPass();
      validaRepass();
      if(!error) modal.style.display = "block";
      localStorage.setItem("email", email);
      localStorage.getItem("pass", pass);
      form.reset();
  })

var modal = document.getElementById("modal");
var button = document.getElementById("submit");
var span = document.getElementsByClassName("close")[0];

button.onclick = function modal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

