

      // Suggested code may be subject to a license. Learn more: ~LicenseLog:2371035890.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1234999138.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1297963795.
import React from 'react';

function Body({ formData }) {
  const renderEducation = () => {
    if (!Array.isArray(formData.eduData) || formData.eduData.length === 0) {
      return null; 
    }

    return (
      <div>
        <h2 className="text-center underline text-2xl font-bold mt-8">Education</h2>
        {formData.eduData.map((edu, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <h3 className="text-xl font-semibold">{edu.school}</h3>
            <p className="text-gray-600 text-sm">
              {edu.from} - {edu.to}
            </p>
            <p>{edu.degree}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderExperience = () => {
    if (!Array.isArray
(formData.expData) || formData.expData.length === 0) {
      return null;
    }

    return (
      <div>
        <h2 className="text-center underline text-2xl font-bold mt-8">Experience</h2>
        {formData.expData.map((exp, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-gray-600 text-sm">
              {exp.position} | {exp.location} | {exp.start} - {exp.end}
            </p>
            <p>Responsibilities: {exp.tasks}</p> 
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8"> 
      <div className="text-center bg-grey shadow-md rounded-lg p-6">
        <h1 className=" underline text-3xl font-bold mb-4">Stats</h1>
        <p>

           {formData.name}
        </p>
        <p>
           {formData.email}
        </p>
        <p>
           {formData.phone}
        </p>
        <p>
           {formData.city}, {formData.state}
        </p>        
              </div>

      {renderEducation()}
      {renderExperience()}
    </div>
  );
}

export default Body;
