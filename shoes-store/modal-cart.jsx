export default function ModalCart(props) {
    const { carts, handleCartQty, handleDeleteCart } = props;

    return (
        <div>
            {/* Modal toggle */}
            <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Open Cart
            </button>
            {/* Main modal */}
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Shoes Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <img className="size-20" src={item.image} alt={item.name} />
                                        </td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button
                                                disabled={item.cartQty === 1}
                                                className="px-2 py-1 rounded-md border border-black text-black disabled:bg-gray-300"
                                                onClick={() => {
                                                    handleCartQty(item.id, -1)
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>{item.cartQty}</span>
                                            <button
                                                className="px-2 py-1 rounded-md border border-black text-black"
                                                onClick={() => {
                                                    handleCartQty(item.id, 1)
                                                }}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-right">{item.price}</td>
                                        <td className="px-6 py-4 text-right">{item.price * item.cartQty}</td>
                                        <td className="px-6 py-4 font-bold text-red-500 text-center">
                                            <button className="cursor-pointer" onClick={() => { handleDeleteCart(item.id) }}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr className="text-xl bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 font-bold text-orange-500">
                                <th scope="row" colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-right">
                                    TOTAL
                                </th>
                                {/* <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td> */}
                                <td className="px-6 py-4 text-right">
                                    ${carts.reduce((total, item) => total + (item.price * item.cartQty), 0).toLocaleString()}
                                </td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
