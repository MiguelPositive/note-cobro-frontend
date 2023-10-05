import Swal from "sweetalert2";

const emptyFields = () => {
  Swal.fire({
    icon: "question",
    title: "Hay campos vacios",
    width: "25rem",
    timer: "3000",
  });
};

export default emptyFields;
