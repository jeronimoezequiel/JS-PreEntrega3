// swal.fire({
//     title: "Bienvenidos!",
//     confirmButtonText: "Ingresar",
// });

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

function entrar () {
    const usu = document.getElementById('usuarioPrincipal').value;
    const pass = document.getElementById('passPrincipal').value;

    if (usu == 'asd' && pass == '123') {
        window.location.href = 'inicio.html';
    } else {
        swal.fire({
            title: "Datos incorrectos!",
            confirmButtonText: "Reingresar",
        });
    };
};

