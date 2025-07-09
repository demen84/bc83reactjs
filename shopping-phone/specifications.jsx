// import { useState } from "react";

export default function Specifications(props) {
    const { phoneDetail } = props;
    return (
        <div className="grid grid-cols-2 mt-7">
            <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                {/* <img src="./images/ip14pro.jpg" alt="#" /> */}
                <img src={phoneDetail?.image} alt="#" />
                {/* phoneDetail?.image: có dấu ? nếu tại index.jsx truyền useState(null) */}
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <h2 className="text-3xl pb-4">Thông số kỹ thuật:</h2>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Màn hình
                            </th>
                            <td className="px-6 py-4">{phoneDetail.screen}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Hệ điều hành
                            </th>
                            <td className="px-6 py-4">{phoneDetail.os}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Camera trước
                            </th>
                            <td className="px-6 py-4">{phoneDetail.frontCam}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Camera sau
                            </th>
                            <td className="px-6 py-4">{phoneDetail.backCam}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                RAM
                            </th>
                            <td className="px-6 py-4">{phoneDetail.ram}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                ROM
                            </th>
                            <td className="px-6 py-4">{phoneDetail.rom}</td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-base">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Giá bán
                            </th>
                            <td className="px-6 py-4"><span className="text-xl font-bold text-red-500">{phoneDetail.price.toLocaleString()} VND</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}