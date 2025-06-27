import { useState } from 'react';

export default function State() {
    let userName = "demen84";
    const [isLogin, setLogin] = useState(false);

    const handleLogin = () => {
        // console.log("User logged in:", userName);
        setLogin(true);
    };

    const handleLogout = () => {
        // console.log("User logged in:", userName);
        setLogin(false);
    };

    const renderInfo = () => {
        if (isLogin) {
            return (
                <div>
                    <h2>Chào mừng {userName}!</h2>
                    <button onClick={handleLogout}>Đăng xuất</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>Please log in now</h2>
                    <button onClick={handleLogin}>Đăng nhập</button>
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
