import { useState } from 'react';
import dataUsers from './datausers.json'; // Assuming you have a data.json file with user data

export default function ListKeys() {
    const [users, setUsers] = useState(dataUsers);

    const renderUsers = () => {
        const userArr = users.map((user) => (
            <li key={user.id}>
                Id: {user.id}, Name: {user.name}, Age: {user.age}
            </li>
        ));
        return userArr;
    };

    return (
        <div>
            <h1>List Keys</h1>
            <ul>
                {renderUsers()}
                {/* {users.map((user) => (
                    <li key={user.id}>
                        Id: {user.id}, Name: {user.name}, Age: {user.age}
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
