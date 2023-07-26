document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    let sUsuario = '';
    let sContrasenna = '';
    let bAcceso = false;

    sUsuario = document.querySelector('#txtUsuario').value;
    sContrasenna = document.querySelector('#txtContrasenna').value;

    bAcceso = validarCredenciales(sUsuario, sContrasenna);
    console.log(bAcceso);

    if(bAcceso == true) {
        ingresar();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos',
        });
    };
}; 

function ingresar() {
    let rol = sessionStorage.getItem('rolUsuarioActivo')
    switch(rol){
        case '1':
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido!',
                showConfirmButton: false,
                timer: 1000,
            }).then(
                function (acceso) {
                    if(acceso = 'timer') {
                        window.location.href = 'inicio.html';
                    }
                }
            ); 
        break;
        case '2': 
            ;
        break;        
        default:
            window.location.href = 'index.html';
        break;
    }
};
