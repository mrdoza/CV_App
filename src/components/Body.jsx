import Info from "./Info";

function Body({ formData }) {
  return (
    <div className="content">
      <div className="main-form">
        <h1>Basic Info</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip: {formData.zip}</p>
      </div>
    </div>
  );
}

export default Body;
