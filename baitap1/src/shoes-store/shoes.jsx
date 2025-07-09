export default function Shoes(props) {
    const { shoe, handleAddCart } = props;

    // const handleDetail = () => {
    //     getShoeDetails(shoe);
    // };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={shoe.image} alt="" />
            </a>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{shoe.name}</h5>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${shoe.price}</h5>

                <div className="flex justify-end gap-3">
                    {/* <Details shoesDetail={shoesDetail} /> */}

                    <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => { handleAddCart(shoe) }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
