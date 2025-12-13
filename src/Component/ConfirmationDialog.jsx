import { useRef, useState } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

export default function ConfirmationDialog({ children, handleDelete }) {
  const toast = useRef(null);
  const [visible, setVisible] = useState(false);

  const accept = () => {
    handleDelete();
    toast.current.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog
        group="declarative"
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        defaultFocus="undefined"
        accept={accept}
        reject={reject}
        acceptClassName="bg-red-700 px-3 py-2 text-white text-sm hover:outline outline-red-300 outline-offset-2 mx-3"
        rejectClassName="bg-green-800 px-3 py-2 text-white text-sm hover:outline outline-green-300 outline-offset-2 "
      />{" "}
      <div onClick={() => setVisible(true)}>{children}</div>
    </>
  );
}
