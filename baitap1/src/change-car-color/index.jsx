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

    const handleChangeColor = (duong_dan_hinh) => {
        setImgPath(duong_dan_hinh);
    };

    return (
        <div>
            <h1 className='text-3xl'>Change car color</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                    <img src={imgPath} width="1000px" alt="Honda Civic" />
                </div>
                <div>
                    <button onClick={changeColorBlack} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Black</button>

                    {/* <button onClick={() => handleChangeColor("./images/red-car.jpg")}>Red</button> */}

                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => handleChangeColor("./images/silver-car.jpg")}>Silver</button>

                    <button onClick={() => handleChangeColor("./images/red-car.jpg")} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
                </div>
            </div>
        </div>
    );
}
