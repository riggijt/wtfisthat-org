import { useState } from "react";

export default function UnderTheHood() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="dropdown" onClick={() => setOpen(!open)}>
        Under the hood
      </button>
      {open && (
        <div className="dropdown-content">
          add Text Here
        </div>
      )}
    </>
  );
}