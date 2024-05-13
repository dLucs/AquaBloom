import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AddPlantModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => {
    dialogRef.current && dialogRef.current.show();
  };
  const closeDialog = () => {
    dialogRef.current && dialogRef.current.close();
  };

  const submitDialog = (e: any) => {
    if (e.currentTarget === e.target) {
      closeDialog();
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} className="fixed inset-0" onClick={submitDialog}>
        <form
          className="grid gap-2 bg-slate-50 p-6 shadow-2xl shadow-slate-900/40 place-items-center "
          method="POST"
        >
          <input
            name="action"
            type="text"
            value={"add-plant"}
            readOnly
            hidden
          />
          <Input name="name" label="Plant Name"></Input>
          <Input name="location" label="Plant Location"></Input>
          <Input name="img_src" label="Plant Picture"></Input>
          <Input name="next_watering" label="Next Watering"></Input>
          <Input name="water_freq" label="Water Frequency"></Input>
          <Button handleSubmit={openDialog}>
            <span className="mt-0.5">Add Plant</span>
          </Button>
        </form>
      </dialog>
      <Button handleSubmit={openDialog}>
        <span className="mt-0.5">Add Plant</span>
      </Button>
    </div>
  );
}
