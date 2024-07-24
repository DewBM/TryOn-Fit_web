import { useState, ChangeEvent } from "react";

const FlipBox = () => {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const handleFrontImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontImage(event.target.files![0]);
  };

  const handleBackImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBackImage(event.target.files![0]);
  };

  return (
    <div className="grid grid-cols-12">
      <style>
        {`
         .flip-box {
            background-color: transparent;
            width: 300px;
            height: 200px;
            border: 1px solid #f1f1f1;
            perspective: 1000px;
          }

         .flip-box-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
          }

         .flip-box:hover .flip-box-inner {
            transform: rotateY(180deg);
          }

         .flip-box-front,.flip-box-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

         .flip-box-front {
            background: linear-gradient(to top left, #ffcc99 0%, #ffffff 100%);
            color: balck; 
            font-weight: bold; 
             transform: rotateY(0deg);
           }

         .flip-box-back {
            background: linear-gradient(to top left, #ffcc99 0%, #ffffff 100%);
            color:black; 
            font-weight: bold; 
            transform: rotateY(180deg);
          }

         .file-input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px;
          }

         .image-container {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Add this property */
          }

         .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Add this property */
          }
        `}
      </style>
      <div className="flip-box lg:col-span-6 lg:col-start-1">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <table>
              <thead>
                <tr>
                  <td>Front Side</td>
                </tr>
              </thead>
            </table>
            {frontImage && (
              <div className="image-container">
                <img src={URL.createObjectURL(frontImage)} alt="Front Side" />
              </div>
            )}
          </div>
          <div className="flip-box-back">
            <table>
              <thead>
                <tr>
                  <td>Back Side</td>
                </tr>
              </thead>
            </table>
            {backImage && (
              <div className="image-container">
                <img src={URL.createObjectURL(backImage)} alt="Back Side" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-6  lg:col-star ">
        <label className="mb-2 lg:col-start-8 font-medium">Font side</label>
        {/* <span>{frontImage ? frontImage.name : "No file selected"}</span> */}
        <div className="file-input-container lg:col-start-6">
          <input
            className="mb-3"
            type="file"
            accept="image/*"
            onChange={handleFrontImageChange}
          />
        </div>

        <label className="container mb-2 lg:col-start-6 font-medium">
          Back side
        </label>
        {/* <span>{backImage ? backImage.name : "No file selected"}</span> */}
        <div className="file-input-container lg:col-start-9">
          <input
            type="file"
            accept="image/*"
            onChange={handleBackImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
