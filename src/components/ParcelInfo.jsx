import formatString from "../scripts/formatString";

import "../styles/components/parcel-info.css";

export default function ParcelInfo({ data }) {
  const { parcel_id, verification_required, eta, last_updated, notes } = data;

  const dateEta = formatString(eta).date;

  const updateDateTime = formatString(last_updated);
  const dateUpdate = updateDateTime.date;
  const timeUpdate = updateDateTime.time;

  function verifyNotes(notes) {
    if (notes === null) {
      return "None";
    } else {
      return notes;
    }
  }

  const notesContent = verifyNotes(notes);

  return (
    <section className="parcel-info-container">
      <div className="parcel-id-container">
        <p className="info-title">Parcel id</p>
        <p>{parcel_id}</p>
      </div>
      <div className="doc-verify-container">
        <p className="info-title">Document verification</p>
        {verification_required ? <p>Required</p> : <p>Not required</p>}
      </div>
      <div className="eta-container">
        <p className="info-title">Estimated date of delivery</p>
        <p>{dateEta}</p>
      </div>
      <div className="update-date-container">
        <p className="info-title">Last update</p>
        <p>{dateUpdate}</p>
        <p>{timeUpdate}</p>
      </div>
      <div className="notes-container">
        <p className="info-title">Notes</p>
        <p>{notesContent}</p>
      </div>
    </section>
  );
}
