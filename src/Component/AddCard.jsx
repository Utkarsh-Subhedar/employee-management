import { useState } from "react";
import DialogBox from "./DialogBox";
const AddCard = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        className=" p-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold text-md"
        onClick={() => setVisible(true)}
      >
        Add
      </button>
      <div>
        <DialogBox
          type={"add"}
          data={[]}
          setVisible={setVisible}
          visible={visible}
        />
      </div>
    </div>
  );
};

export default AddCard;
