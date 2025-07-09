import { useState } from 'react';

export default function Phone(props) {
    //Component con (Phone) nhận data json từ component cha trong index.jsx (ShoppingPhone) bằng cách bỏ props vào trong Phone. Ex: Phone(props). Và khai báo 1 dòng như sau: const { phone } = props;
    //Or: export default function Phone({phone}) {
    const { phone, getPhone, handleAddCart } = props; //phone: bên cha tên phone thì bên con phải ghi là phone

    const handlePhoneDetail = () => {
        getPhone(phone);
    }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={phone.image}>
                <img className="rounded-t-lg" src={phone.image} alt="phone" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{phone.name}</h5>
                </a>
                <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{phone.price.toLocaleString()} VND</h5>
                </div>

                <button onClick={handlePhoneDetail} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>

                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => { handleAddCart(phone) }}>Add to Cart</button>
            </div>
        </div>

    );
}
