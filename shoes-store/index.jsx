import { useState } from 'react';
import datashoes from "./datashoes.json";
import Shoes from "./shoe";
import ModalCart from "./modal-cart";
// import Details from "./details";

export default function ShoesStore() {
    const [shoes, setShoes] = useState(datashoes);

    // const [shoesDetail, setShoesDetail] = useState(null);

    const [carts, setCarts] = useState([]);

    const renderShoes = () => {
        return shoes.map((shoe) => {
            return <Shoes key={shoe.id} shoe={shoe}
                getShoe={handleGetShoe}
                handleAddCart={handleAddCart} />
        })
    }

    //Xử lý nhận data từ component con (Shoes())
    const handleGetShoe = (shoe) => {
        setShoesDetail(shoe);
    }

    const handleAddCart = (shoe) => {
        const newCarts = [...carts];

        //Kiểm tra shoes đã tồn tại trong giỏ hàng (carts) hay chưa?
        const index = newCarts.findIndex((sp) => sp.id === shoe.id);

        if (index === -1) {//shoe chưa tồn tại trong giỏ hàng
            const newShoe = { ...shoe, cartQty: 1 };
            newCarts.push(newShoe);
        } else {
            //Đã tồn tại sp trong giỏ hàng thì tăng qty trong carts
            newCarts[index].cartQty += 1;
        }
        setCarts(newCarts);
    }

    const handleCartQty = (id, qty) => {
        const newCarts = [...carts];
        const index = newCarts.findIndex((sp) => sp.id === id);

        if (index !== -1) {
            //Nếu đã tồn tại sp trong carts thì xử lý tăng/giảm qty
            newCarts[index].cartQty += qty;
        }
        setCarts(newCarts);
    }

    const handleDeleteCart = (id) => {
        const newCarts = [...carts];
        const index = newCarts.findIndex((sp) => sp.id === id);

        if (index !== -1) {
            //nếu tìm thấy thì xóa ra khỏi carts
            newCarts.splice(index, 1);
            setCarts(newCarts);
        }

        //Cách 2:
        setCarts(carts.filter((sp) => sp.id !== id));
    }

    return (
        <div className='container mx-auto'>

            <h1 className='text-5xl text-center text-blue-800 py-4 font-bold'>Welcome to the Shoes Store</h1>
            <div className='flex justify-end'>
                <ModalCart carts={carts} handleCartQty={handleCartQty} handleDeleteCart={handleDeleteCart} />
            </div>
            {/* <Details shoesDetail={shoesDetail} /> */}
            <div className='grid grid-cols-4 gap-6'>
                {renderShoes()}
            </div>

        </div>
    )
}
