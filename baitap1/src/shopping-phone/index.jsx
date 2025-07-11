import { useState } from 'react'
import dataphones from './dataphone.json';
import Phone from './phone';
import Specifications from './specifications';
import Modal from './modal';

export default function ShoppingPhone() {
    const [phones, setPhones] = useState(dataphones);
    const [phoneDetail, setPhoneDetail] = useState(phones[0]); //useState(null);

    const [carts, setCarts] = useState([]);

    const renderPhones = () => {
        return phones.map((phone, index) => {
            // return <Phone key={index} phone={phone} />
            return <Phone key={phone.maSP} phone={phone}
                getPhoneDetails={handleGetPhoneDetail}
                handleAddCart={handleAddCart} />
        });
    };

    const handleGetPhoneDetail = (phone) => {
        setPhoneDetail(phone);
    };

    const handleAddCart = (phone) => {
        const newCarts = [...carts];

        //Kiểm tra sp đã tồn tại trong carts hay chưa?
        const index = newCarts.findIndex((sp) => sp.maSP === phone.maSP);

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
        const index = newCarts.findIndex((sp) => sp.maSP === productID);

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
        const index = newCarts.findIndex(sp => sp.maSP === id);

        if (index !== -1) {
            //nếu tìm thấy thì xóa ra khỏi carts
            newCarts.splice(index, 1);
            setCarts(newCarts);
        }

        //C2:
        // setCarts(carts.filter((sp) => sp.id !== id));
    }

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-5xl text-center mb-5'>Shopping Phone</h1>
            <Modal carts={carts} handleCartQty={handleCartQty} handleDeleteCart={handleDeleteCart} />
            <div className='grid grid-cols-3 gap-5'>
                {renderPhones()}
            </div>
            <Specifications phoneDetail={phoneDetail} />
        </div>
    );
}
