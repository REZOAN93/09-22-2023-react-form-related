import "./App.css";
import Reusable from "./Component/Reusable/Reusable";

function App() {
  const handleSign = (data) => {
    console.log(data,"local data")
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Reusable
        formTitle={"Sign Up"}
        handleSubmit={handleSign}
        submitBtnText={"Sign Up"}
      ></Reusable>
      <Reusable
        formTitle={"Profile Update"}
        handleSubmit={handleUpdate}
        submitBtnText={"Update"}
      ></Reusable>
      {/* <HookForm></HookForm> */}
      {/* <ReffForm></ReffForm> */}
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default App;
