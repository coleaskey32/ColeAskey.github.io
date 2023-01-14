import React from "react";
import styles from '../styles/main.module.css'
//ColeAskeyResume.pdf
const Download = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Chapter4.txt').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Chapter4.txt';
                alink.click();
            })
        })
    }
    return (
        <>
            <center>
                <button onClick={onButtonClick} className={styles.btn2}>
                    Download CV
                </button>
            </center>
        </>
    );
};
  
export default Download;