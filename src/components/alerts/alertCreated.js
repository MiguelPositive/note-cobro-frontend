import Swal from "sweetalert2";

const alertCreated = () => {
  Swal.fire({
    titleText: "Alerta creada",
    icon: "success",
    timer: "3000",
  });
};

export default alertCreated;
