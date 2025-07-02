export default function Phone(props) {

    const { phone, getPhoneDetails } = props;

    const handleDetail = () => {
        getPhoneDetails(phone);
    };
    // console.log('PROPS');
    // console.log(props);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                {/* <img className="rounded-t-lg" src="./images/applephone.jpg" /> */}
                <img className="rounded-t-lg" src={phone.hinhAnh} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{phone.tenSP}</h5>
                </a>

                <button onClick={handleDetail} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detail</button>

                {/* Nút Add to Cart */}
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to cart</button>
            </div>
        </div>
    );
}
