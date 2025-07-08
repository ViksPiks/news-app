import { Toast } from "bootstrap";

export const showAlert = (error) => {
  const toastContainer = document.createElement("div");
  toastContainer.id = "toast-container";
  toastContainer.className =
    "toast-container position-fixed bottom-0 end-0 p-3";
  document.body.appendChild(toastContainer);

  const toast = document.createElement("div");
  toast.className = "toast text-bg-danger";
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");
  toastContainer.appendChild(toast);

  const toastBody = document.createElement("div");
  toastBody.classList.add("toast-body");
  toastBody.textContent = error.message;
  toast.append(toastBody);

  const bootstrapToast = new Toast(toast);

  bootstrapToast.show();
};
