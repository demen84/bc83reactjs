import { useState } from 'react';
import Child from './child';

export default function Communication() {
    const [user, setUser] = useState("Quy-Café");
    const [age, setAge] = useState("25");

    const changeUser = () => {
        // Logic to change user name and age
        setUser("Huy Hoàng");
        setAge("10");
    }
    // const resetUser = () => {
    //     // Logic to reset user name and age
    //     setUser("Quy-Café");
    //     setAge("25");
    // }

    const handleGetUserReset = (userName, userAge) => {
        // Nhận dữ liệu từ component con
        setUser(userName);
        setAge(userAge);
    }

    return (
        <div>
            <h1>* Communication</h1>
            <p>User name: {user} - age: {age}</p>

            <button onClick={changeUser} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Change User</button>

            {/* <button onClick={resetUser} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset User</button> */}

            <Child user={user} age={age} />
        </div>
    )
}
