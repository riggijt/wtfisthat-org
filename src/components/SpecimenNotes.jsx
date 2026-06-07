import { useState } from "react";

export default function SpecimenNotes({
  children,
  image = "/images/specimen-default.png",
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="specimen-notes">
      <button onClick={() => setOpen(!open)}>
        <div className="specimen-header">
          <div className="specimen-title-wrap">
            <h3>Specimen Notes</h3>
            <p>research, observations, and related material</p>
          </div>

          <img
            src={image}
            alt="Specimen"
            className="specimen-image"
          />
        </div>
      </button>

      {open && (
        <div className="specimen-body">
          {children}
        </div>
      )}
    </section>
  );
}