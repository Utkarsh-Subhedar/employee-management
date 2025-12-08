import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import EditUserDetails from "./EditUserDetails";

const AddCard = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="m-3 text-end">
      <button
        className=" p-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold text-md"
        onClick={() => setVisible(true)}
      >
        Add
      </button>
      <div>
        <Dialog
          visible={visible}
          modal
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          className="mx-5"
          content={({ hide }) => <EditUserDetails hide={hide} type={"add"} />}
        ></Dialog>
      </div>
    </div>
  );
};

export default AddCard;
