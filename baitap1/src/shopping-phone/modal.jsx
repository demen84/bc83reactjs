import React from 'react'

export default function Modal(props) {
    const { carts, handleCartQty, handleDeleteCart } = props;

    return (
        <div>
            <div className="block space-y-4 md:flex md:space-y-0 md:space-x-4 rtl:space-x-reverse">

                <button data-modal-target="medium-modal" data-modal-toggle="medium-modal" className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Open Cart
                </button>

            </div>
            {/* Default Modal */}
            <div id="medium-modal" tabIndex={-1} className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Qty
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Amnount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((sp) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {sp.tenSP}
                                            </th>
                                            <td className="px-6 py-4">
                                                <img src={sp.hinhAnh} alt={sp.tenSP} className="w-20 h-20" />
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {sp.giaBan.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 space-x-2">
                                                <button disabled={sp.qty === 1} onClick={() => { handleCartQty(sp.maSP, -1) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-</button>
                                                <span className="px-2">{sp.qty}</span>
                                                <button onClick={() => { handleCartQty(sp.maSP, 1) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+</button>

                                            </td>
                                            <td className="px-6 py-4 text-right">{(sp.giaBan * sp.qty).toLocaleString()}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button className="cursor-pointer font-bold text-red-500" onClick={() => handleDeleteCart(sp.maSP)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 font-bold text-orange-500">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Total
                                </th>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 text-right">
                                    {carts.reduce((total, sp) => total + (sp.giaBan * sp.qty), 0).toLocaleString()}
                                </td>
                                <td className="px-6 py-4"></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </div >
    );
}
