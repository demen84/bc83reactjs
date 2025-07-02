import { useState } from 'react';

export default function State() {
    let userName = "demen84";
    const [isLogin, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(true);
    };

    const handleLogout = () => {
        setLogin(false);
    };

    const renderInfo = () => {
        if (isLogin) {
            return (
                <div>
                    <h2>Chào mừng {userName}!</h2>
                    {/* <button onClick={handleLogout}>Đăng xuất</button> */}
                    <button onClick={handleLogout} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Please log in now</h2>
                    {/* <button onClick={handleLogin}>Đăng nhập</button> */}
                    <button onClick={handleLogin} type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                </div>
            );
        }
    };

    return (
        <div>
            <h1>This is State</h1>
            <hr />
            {renderInfo()}
        </div>
    );
}
