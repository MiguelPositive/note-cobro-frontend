import Swal from "sweetalert2";

const debtAdded = () => {
  Swal.fire({
    icon: "success",
    title: "Deduda agregada",
    width: "25rem",
    timer: "2000",
  });
};

export default debtAdded;
