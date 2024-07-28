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
            width: 350px;
            height: 250px;
            border: 1px solid #f1f1f1;
            perspective: 1000px;
            border-radius: 8px;
            overflow: hidden;
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
            border-radius: 8px;
          }

          .flip-box-front, .flip-box-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .flip-box-front {
            background: white;
            color: #8C572C;
            font-size: 16px;
            text-shadow: -0.5px -0.5px 0 #FFFFFF,
                0.5px -0.5px 0 #FFFFFF,
                0.5px 0.5px 0 #FFFFFF,
                -0.5px 0.5px 0 #FFFFFF;
            transform: rotateY(0deg);
            border: 2px solid #C1BBB3;
            border-radius: 8px;
            text-shadow: 0 0 0 2px #fff;
          }

          .flip-box-back {
            background: white;
            color: #8C572C;
            font-size: 16px;
            text-shadow: -0.5px -0.5px 0 #FFFFFF,
                0.5px -0.5px 0 #FFFFFF,
                0.5px 0.5px 0 #FFFFFF,
                -0.5px 0.5px 0 #FFFFFF;
            transform: rotateY(180deg);
            border: 1px solid #C1BBB3 ;
            border-radius: 8px;
            outline: 2px solid #fff;
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
            object-fit: cover;
            overflow: hidden;
          }

          .image-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          .flip-box-front img, .flip-box-back img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        `}
      </style>
      <div className="flip-box lg:col-span-6 lg:col-start-1">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <table>
              <thead>
                <tr>
                  <td>Front View</td>
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
                  <td>Rear View</td>
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
      <div className="file-input-container lg:col-start-8 lg:col-span-4 mt-36">
        <input
          type="file"
          accept="image/*"
          onChange={handleFrontImageChange}
          className="hidden"
          id="front-image-input"
        />
        <label
          htmlFor="front-image-input"
          className="bg-orange-900		 text-white mb-6 font-bold px-2 py-2 text-sm rounded-lg hover:bg-main-light cursor-pointer"
        >
          Upload Front Side
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleBackImageChange}
          className="hidden"
          id="back-image-input"
        />
        <label
          htmlFor="back-image-input"
          className="bg-orange-900	 text-white font-bold px-2 py-2 text-sm rounded-lg hover:bg-main-light cursor-pointer"
        >
          Upload Rear Side
        </label>
      </div>
    </div>
  );
};

export default FlipBox;
