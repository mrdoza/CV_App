import Info from "./Info";

function Body({ formData }) {
  return (
    <div>
      <div className="main-form">
        <h1 className="text-3xl font-bold underline">Basic Info</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip: {formData.zip}</p>
      </div>
      <div className="main-form">
        <h1>Education</h1>
        <p>School: {formData.school}</p>
        <p>From: {formData.from}</p>
        <p>To: {formData.to}</p>
        <p>Degree: {formData.degree}</p>
      </div>
      <div className="main-form">
        <h1>Experience</h1>
        <p>Company: {formData.company}</p>
        <p>City: {formData.location}</p>
        <p>Start Date: {formData.start}</p>
        <p>End Date: {formData.end}</p>
        <p>Position: {formData.position}</p>
        <p>Resposibilities: {formData.tasks}</p>
      </div>
    </div>
  );
}

export default Body;
