import React from "react";
import { Dialog } from "primereact/dialog";
import EditUserDetails from "./EditUserDetails";

const DialogBox = ({ type, data, setVisible, visible }) => {
  return (
    <Dialog
      visible={visible}
      modal
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      className="mx-5"
      content={({ hide }) => (
        <EditUserDetails hide={hide} type={type} data={data} />
      )}
    ></Dialog>
  );
};

export default DialogBox;
