import React from 'react';
import '../css/Certificate.css';

export const Certificate = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
      </div>
      <div className="certificate-body">
        <h2 className="student-name">Student Name</h2>
        <p>has successfully completed the internship in...</p>
        <h3 className="internship-domain">Internship Domain</h3>
        <p>from</p>
        <p className="dates"> Start Date to End Date</p>
      </div>
      <div className="certificate-footer">
        <p>Authorized Signature</p>
        <p>[Signature Placeholder]</p>
      </div>
    </div>
  );
};


