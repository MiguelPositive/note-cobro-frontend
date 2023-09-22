import Swal from "sweetalert2";

const emptyFields = () => {
  Swal.fire({

    icon:"question",
    title: "Hay campos vacios",
    width: "25rem",
  });
};

export default emptyFields;
