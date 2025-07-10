import { useState } from 'react';
import datashoes from './datashoes.json';
import Shoes from './shoes';
import ModalCart from './modal';

export default function ShopShoes() {
    const [shoes, setShoes] = useState(datashoes);

    const [carts, setCarts] = useState([]);

    const renderShoes = () => {
        return shoes.map((shoe) => {
            return <Shoes key={shoe.id} shoe={shoe}
                handleAddCart={handleAddCart} />
        });
    }

    const handleAddCart = (shoe) => {
        const newCarts = [...carts];

        //Kiểm tra sp đã tồn tại trong carts hay chưa?
        const index = newCarts.findIndex((sp) => sp.id === shoe.id);

        if (index === -1) {
            //sp chưa tồn tại trong giỏ hàng (carts)
            const newShoe = { ...shoe, qty: 1 };
            newCarts.push(newShoe);
        } else { //đã tồn tại sp trong carts, vì vậy ta chỉ cần tăng số lượng
            newCarts[index].qty += 1;
        }

        setCarts(newCarts);
    }

    const handleCartQty = (id, qty) => {
        const newCarts = [...carts];
        const index = newCarts.findIndex((sp) => sp.id === id);

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
        <div className='container mx-auto mt-10'>
            <h1 className='text-4xl text-center text-fuchsia-500'>Welcome to the Shoes Store</h1>
            <br /><br />
            <div className='flex justify-end'>
                <ModalCart carts={carts} handleCartQty={handleCartQty} handleDeleteCart={handleDeleteCart} />
            </div>
            <div className='grid grid-cols-4 gap-7 mt-2'>
                {/* <Shoes /> <Shoes /> <Shoes /> */}
                {renderShoes()}
            </div>
            {/* <ModalDetail /> */}
        </div>
    )
}
