import Info from "./Info";
import Edu from "./Edu";
import Exp from "./Exp";

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
      {Array.isArray(formData.eduData) &&
        formData.eduData.map((edu, index) => (
          <div key={index}>
            <h4>Education {index + 1}</h4>
            <p>School: {edu.school}</p>
            <p>From: {edu.from}</p>
            <p>To: {edu.to}</p>
            <p>Degree: {edu.degree}</p>
          </div>
        ))}
      <div className="main-form">
        <h1 className="text-3xl font-bold underline">Experience</h1>
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
