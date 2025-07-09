import { useState } from 'react';
import dataPhoneJSON from "./dataphones.json";
import Phone from "./phone";
import Specifications from './specifications';
import Modal from "./modal";

export default function ShoppingPhone() {
    const [phones, setPhones] = useState(dataPhoneJSON);

    const [phoneDetail, setPhoneDetail] = useState(phones[0]); //useState(null);

    const [carts, setCarts] = useState([]);

    const renderPhones = () => {
        return phones.map((phone) => {
            return <Phone key={phone.id} phone={phone}
                getPhone={handleGetPhone}
                handleAddCart={handleAddCart} />
            // <Phone key={phone.id} phone={phone} />: truyền key & phone (cả data json) qua component con (Phone)
        })
    }

    //Xử lý nhận data từ component con (Phone())
    const handleGetPhone = (phone) => {
        setPhoneDetail(phone);
    }

    const handleAddCart = (phone) => {
        const newCarts = [...carts];

        //Kiểm tra sp đã tồn tại trong carts hay chưa?
        const index = newCarts.findIndex((sp) => sp.id === phone.id);

        if (index === -1) {
            //sp chưa tồn tại trong giỏ hàng (carts)
            const newPhone = { ...phone, qty: 1 };
            newCarts.push(newPhone);
        } else { //đã tồn tại sp trong carts, vì vậy ta chỉ cần tăng số lượng
            newCarts[index].qty += 1;
        }

        setCarts(newCarts);
    }

    const handleCartQty = (productID, qty) => {
        const newCarts = [...carts];
        const index = newCarts.findIndex((sp) => sp.id === productID);

        if (index !== -1) { //nếu đã tìm thấy (đã tồn tại sp trong carts thì xử lý tăng/giảm qty)
            newCarts[index].qty += qty;
        }

        setCarts(newCarts);

        //C2:
        // setCarts(
        //     carts.map((sp) => {
        //         if (sp.id !== id) return sp;
        //         return {
        //             ...sp,
        //             qty: sp.qty + qty,
        //         }
        //     })
        // );
    }

    const handleDeleteCart = (id) => {
        const newCarts = [...carts];
        const index = newCarts.findIndex(sp => sp.id === id);

        if (index !== -1) {
            //nếu tìm thấy thì xóa ra khỏi carts
            newCarts.splice(index, 1);
            setCarts(newCarts);
        }

        //C2:
        // setCarts(carts.filter((sp) => sp.id !== id));
    }

    return (
        <div className='container mx-auto'>
            <Modal carts={carts} handleCartQty={handleCartQty} handleDeleteCart={handleDeleteCart} />
            <h1 className='text-5xl text-center text-red-800'>Shopping Phone</h1>
            <div className='grid grid-cols-4 gap-6'>
                {/* <Phone /><Phone /><Phone /> */}
                {renderPhones()}
            </div>
            <Specifications phoneDetail={phoneDetail} />
        </div >
    );
}
