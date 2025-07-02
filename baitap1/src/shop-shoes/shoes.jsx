export default function Shoes(props) {
    const { shoe, getShoeDetails } = props;

    const handleDetail = () => {
        getShoeDetails(shoe);
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={shoe.image} alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shoe.name}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${shoe.price}</h5>

                <button onClick={handleDetail} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>

                {/* Nút Add to Cart */}
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Cart</button>
            </div>
        </div>
    )
}
