import Swal from "sweetalert2";

const emptyFields = () => {
  Swal.fire({
    title: "Debe llenar todos los campos",
    icon: "error",
  });
};

export default emptyFields;
