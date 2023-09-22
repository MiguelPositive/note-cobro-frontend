import Swal from "sweetalert2";

const invalidCredentials = () => {
  Swal.fire({
    icon: "error",
    title: "Credenciales invalidas",
    width: "25rem",
  });
};

export default invalidCredentials;
