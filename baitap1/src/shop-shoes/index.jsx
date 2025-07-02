import { useState } from 'react';
import datashoes from './datashoes.json';
import Shoes from './shoes';
import ModalDetail from './modal-detail';

export default function ShopShoes() {
    const [shoes, setShoes] = useState(datashoes);

    const [shoesDetail, setShoesDetail] = useState(shoes[0]); //useState(null);

    const renderShoes = () => {
        return shoes.map((shoe, index) => {
            return <Shoes key={index} shoe={shoe} getShoeDetails={handleGetShoeDetail} />
        });
    }

    const handleGetShoeDetail = (shoe) => {
        setShoesDetail(shoe);
    };


    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-4xl text-center text-fuchsia-500'>Shop Shoes Homework - Bài tập Buổi 27-Reactjs</h1>
            <br /><br />
            <div className='grid grid-cols-3 gap-5'>
                {/* <Shoes /> <Shoes /> <Shoes /> */}
                {renderShoes()}
            </div>
            <ModalDetail shoesDetail={shoesDetail} />
        </div>
    )
}
