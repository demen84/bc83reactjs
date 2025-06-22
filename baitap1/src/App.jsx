//import Baitap1 from "./BT_1";//ko cần phải có index "./BT_1/index.jsx"
import Baitap2 from "./BT_2";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <> {/* or: <div></div>: nếu tạo thẻ div này thì sẽ bị dư 1 thẻ div*/}
      {/* <h1 style={{ textAlign: "center" }}>Tôi đang học ReactJS</h1> */}
      {/* <Baitap1 /> */}
      <Baitap2 />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>*/}
    </>
  )
}

export default App
