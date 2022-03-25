import formatString from "../scripts/formatString";

import "../styles/components/parcel-info.css";

export default function ParcelInfo({ data }) {
  const { parcel_id, verification_required, eta, last_updated, notes } = data;

  const etaArray = formatString(eta);
  const dateEta = etaArray[0];

  const updateArray = formatString(last_updated);
  const dateUpdate = updateArray[0];
  const timeUpdate = updateArray[1];

  function verifyNotes(notes) {
    if (notes === null) {
      return <p>None</p>;
    } else {
      return notes;
    }
  }

  const notesContent = verifyNotes(notes);

  return (
    <section>
      <div>
        <p>Parcel id</p>
        <p>{parcel_id}</p>
      </div>
      <div>
        <p>Document verification</p>
        {verification_required ? (
          <span>Required</span>
        ) : (
          <span>Not required</span>
        )}
      </div>
      <div>
        <p>Estimated date of delivery</p>
        <p>{dateEta}</p>
      </div>
      <div>
        <p>Last update</p>
        <p>{dateUpdate}</p>
        <p>{timeUpdate}</p>
      </div>
      <div>
        <p>Notes</p>
        <p>{notesContent}</p>
      </div>
    </section>
  );
}
