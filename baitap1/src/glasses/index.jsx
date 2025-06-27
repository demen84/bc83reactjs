import { useState } from 'react'
import dataGlasses from './data-glasses.json'; // Assuming you have a dataGlasses.json file with glasses data

export default function Glasses() {
    const [glasses, setGlasses] = useState(dataGlasses); // Initialize state for glasses data if needed
    const [imgPath, setImgPath] = useState(glasses[1].url); // Set initial image path to the first glass item

    return (
        <div>
            <h1>Thay mắt kính cho face model</h1>
            <img src={imgPath} />
        </div>
    )
}
