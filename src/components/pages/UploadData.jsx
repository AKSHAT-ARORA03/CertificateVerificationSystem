import React from "react";
import '../css/UploadData.css';





export const UploadData = () => {
    return(
        <>
        
             <div className="data">
                <h2>Please upload student data....</h2>
            </div>
            <div className="container">
            <div className="card">
             <img src= "./image/upload.png" alt="Upload" className="card-image" />
                <button className="upload-button">Upload</button>
            </div>
            </div>

        </>
    )
}