
// props: truyền dữ liệu từ component cha xuống component con

export default function Child(props) {
    console.log(props);

    const resetUser = () => {
        const userReset = "Quốc Quy";
        const ageReset = "40";
        props.getUser(userReset, ageReset);
    }

    return (
        <div className="border border-2 border-blue-500 p-5 bg-amber-500">
            <h2>* Component con</h2>
            <p>Name: {props.user} - Age: {props.age}</p> <br />

            <button onClick={resetUser} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset User</button>
        </div>
    )
}
