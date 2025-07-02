import { useState } from 'react'
import dataphones from './dataphone.json';
import Phone from './phone';
import Specifications from './specifications';
import Modal from './modal';

export default function ShoppingPhone() {
    const [phones, setPhones] = useState(dataphones);
    const [phoneDetail, setPhoneDetail] = useState(phones[0]); //useState(null);

    const [carts, setCarts] = useState(phones[0]);

    const renderPhones = () => {
        return phones.map((phone, index) => {
            // return <Phone key={index} phone={phone} />
            return <Phone key={phone.maSP} phone={phone}
                getPhoneDetails={handleGetPhoneDetail} />
        });
    };

    const handleGetPhoneDetail = (phone) => {
        setPhoneDetail(phone);
    };

    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-5xl text-center mb-5'>Shopping Phone</h1>
            <Modal />
            <div className='grid grid-cols-3 gap-5'>
                {/* <Phone />
                <Phone />
                <Phone /> */}
                {renderPhones()}
            </div>
            <Specifications phoneDetail={phoneDetail} />
        </div>
    );
}
