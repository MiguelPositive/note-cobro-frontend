import Swal from "sweetalert2";

const debtorRegistered = () => {
  Swal.fire({
    title: "Deudor Agregado",
    icon: "success",
    timer: "3000",
  });
};

export default debtorRegistered;
