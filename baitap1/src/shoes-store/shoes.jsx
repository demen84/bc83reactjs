import { useState } from "react";
// import Details from "./details";

export default function Shoes(props) {
    const { shoe, handleAddCart } = props;

    const [shoesDetail, setShoesDetail] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const handleShoeDetail = (shoe) => {
        setShoesDetail(shoe);
        setShowModal(true);
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

                <div className="flex gap-2">
                    {/* <Details shoesDetail={shoesDetail} /> */}
                    <button onClick={() => handleShoeDetail(shoe)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>

                    {/* Modal Component */}
                    {showModal && shoesDetail && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded shadow-xl max-w-md w-full">
                                <h2 className="text-2xl font-bold mb-2 text-blue-600">{shoesDetail.name}</h2>
                                <img src={shoesDetail.image} alt={shoesDetail.name} className="h-50 object-contain mb-2" />
                                <p className="text-gray-700 mb-1">
                                    <strong>Price:</strong> ${shoesDetail.price}
                                </p>
                                <p className="text-gray-700 mb-1">
                                    <strong>In Stock:</strong> {shoesDetail.qty}
                                </p>
                                <p className="text-gray-600 mt-2">Description:</p>
                                <p className="text-gray-600 mt-1">{shoesDetail.desc}</p>

                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => { handleAddCart(shoe) }}>Add to Cart</button>
                </div>

            </div>
        </div>
    );
}
