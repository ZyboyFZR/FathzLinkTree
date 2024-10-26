// login
const login = document.getElementById('login');
const nama = document.getElementById('username');


// content 
const content = document.getElementById('content');

content.style.display = 'none';

function btnLogin() {
     if (nama.value == "") {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Nama Tidak Boleh Kosong",
            showConfirmButton: false,
            timer: 1500
          });
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Selamat Datang " + nama.value,
            showConfirmButton: false,
            timer: 2000
          });
        window.addEventListener('click', () => {
            document.getElementById('sound').play();
        })
       login.style.display = 'none'
       content.style.display = 'block';
    }
}