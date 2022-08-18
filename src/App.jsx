import { useState } from 'react'
import './App.css'
import logo from "./assets/Blue umbrella.png"
import icon from "./assets/upload_icon.svg"
import useScript from 'react-script-hook';

function App() {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {

		setSelectedFile(event.target.files[0]);

		setIsFilePicked(true);

  };
  const handleSubmission = () => {

  }
  return (
    <>
    
    <section class="containers">
        <input type="radio" name="color" id="color-1" checked hidden/>
        <input type="radio" name="color" id="color-2" hidden/>
        <input type="radio" name="color" id="color-3" hidden/>
        <input type="radio" name="color" id="color-4" hidden/>

        <div class="product">
            <img src={logo} alt="Product"/>
        </div>

        <div class="product-nav">
        <h2 className='text-black' style={{fontWeight:"bold",fontSize:"45px",marginBottom:"45px"}}>Custom Umbrella</h2>
            <label for="color-1" style={{marginLeft:"25px"}}></label>
            <label for="color-2" style={{marginLeft:"25px"}}></label>
            <label for="color-3" style={{marginLeft:"25px"}}></label>           
          <h4 style={{fontWeight:"normal",marginTop:"15px",color:"black"}}>Customize your umbrella</h4>
          <p style={{fontWeight:"normal",marginTop:"5px",color:"black"}}>Upload a logo for an instant preview.</p>
          <p style={{fontWeight:"normal",marginTop:"5px",color:"black"}}>.png and .jpg files only. Max file size is 5 MB.</p>
          <button id='upload' className = 'file-upload-image file-upload file-upload-btn' >Upload Logo</button>
        </div>
    </section>
  </>
  )
}

export default App
