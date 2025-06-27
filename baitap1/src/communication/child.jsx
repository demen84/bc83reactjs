
// props: truyền dữ liệu từ component cha xuống component con

export default function Child(props) {

    const resetUser = () => {
        // Logic to reset user name and age
        // props.handleGetUserReset("Quy-Café", "25");
        const userReset = "Quy-Café";
        const ageReset = "25";
        props.handleGetUserReset(userReset, ageReset);
    }

    return (
        <div className="border border-2 border-blue-500 p-5 bg-amber-500">
            <h1>* Child</h1>
            <p>User name: {props.user} - age: {props.age}</p>

            <button onClick={resetUser} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset User</button>
        </div>
    )
}
