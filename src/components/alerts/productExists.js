import Swal from "sweetalert2";

const productExists = () => {
  Swal.fire({
    icon: "question",
    title: "Ese producto ya existe",
    width: "25rem",
    timer: "3000",
  });
};

export default productExists;
