import { useState } from 'react';

export default function ChangeCarColor() {
    const [imgPath, setImgPath] = useState("./images/red-car.jpg");

    const changeColorRed = () => {
        setImgPath("./images/red-car.jpg");
    };
    const changeColorBlack = () => {
        setImgPath("./images/black-car.jpg");
    };
    const changeColorSilver = () => {
        setImgPath("./images/silver-car.jpg");
    };

    const handleChangeColor = (imagePath) => {
        setImgPath(imagePath);
    };

    return (
        <div>
            <h1>Change car color</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                    <img src={imgPath} width="1000px" alt="Honda Civic" />
                </div>
                <div>
                    <button onClick={changeColorBlack}>Black</button>
                    <button onClick={() => handleChangeColor("./images/red-car.jpg")}>Red</button>
                    <button onClick={() => handleChangeColor("./images/silver-car.jpg")}>Silver</button>
                </div>
            </div>
        </div>
    );
}
