// swal.fire({
//     title: "Hola, mi nombre es AURA!",
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

/* Roles
    1: Admin,
    2: Usuario,
*/
function obetnerListaUsuarios() {
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null) {
        listaUsuarios =
        [
            //id    Nombre    Apellido    N.Usuario  Contrasenna  Rol
            ['1', 'Jeronimo', 'Nuñez',   '39681025', '39681025',  '1'],
            ['2', 'Judith',   'Nuñez',   '22944885', '22944885',  '1'],
            ['3', 'Soledad',  'Nuñez',   '24457964', '24457964',  '1'],
            ['4', 'Victoria', 'Lupetti', '37151847', '37151847',  '1'],
            ['5', 'Barbara',  'Lupetti', '38866179', '38866179',  '1'],
            ['6', 'Franco',   'Galatti', '38691753', '38691753',  '1'],
        ];
    };
return listaUsuarios;
};

function validarCredenciales(pUsuario, pContrasenna) {
    let listaUsuarios = obetnerListaUsuarios();
    let bAcceso = false;

    for(let i = 0; i < listaUsuarios.length; i++) {
        if(pUsuario == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
        };
    };
return bAcceso;
};





