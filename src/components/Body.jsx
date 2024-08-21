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
          <div key={index} className="main-form">
            <h4>Education {index + 1}</h4>
            <p>School: {edu.school}</p>
            <p>From: {edu.from}</p>
            <p>To: {edu.to}</p>
            <p>Degree: {edu.degree}</p>
          </div>
        ))}

      {Array.isArray(formData.expData) &&
        formData.expData.map((exp, index) => (
          <div key={index} className="main-form">
            <h4 className="text-3xl font-bold underline">
              Experience {index + 1}
            </h4>
            <p>Company: {exp.company}</p>
            <p>City: {exp.location}</p>
            <p>Start Date: {exp.start}</p>
            <p>End Date: {exp.end}</p>
            <p>Position: {exp.position}</p>
            <p>Resposibilities: {exp.tasks}</p>
          </div>
        ))}
    </div>
  );
}

export default Body;
