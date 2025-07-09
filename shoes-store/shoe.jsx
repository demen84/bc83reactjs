import { useState } from "react";
import Details from "./details";

export default function Shoes(props) {
    const { shoe, getShoe, handleAddCart } = props;

    const [shoesDetail, setShoesDetail] = useState(null);

    const handleShoeDetail = () => {
        getShoe(shoe);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={shoe.image}>
                <img className="rounded-t-lg" src={shoe.image} alt={shoe.name} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{shoe.name}</h5>
                </a>
                <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${shoe.price.toLocaleString()}</h5>
                </div>

                <div className="flex justify-end gap-3">
                    {/* <Details shoesDetail={shoesDetail} /> */}

                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => { handleAddCart(shoe) }}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
}
