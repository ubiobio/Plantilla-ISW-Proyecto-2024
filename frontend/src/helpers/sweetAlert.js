import Swal from 'sweetalert2';

const toastTypes = {
  200: "success",
  201: "success",
  400: "warning",
  404: "warning",
  500: "error",
};

export function sweetAlert(status, message) {

    const toastFunction = toastTypes[status] || "error";

    Swal.fire({
      position: "top-end",
      icon: toastFunction,
      text: message,
      showConfirmButton: false,
      width: '26em',
      timer: 3000
    });
}

export function deleteDataAlert(status, message) {
  const toastFunction = toastTypes[status] || "error";
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: message,
        icon: toastFunction
      });
    }
  });
}