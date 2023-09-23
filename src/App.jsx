import "./App.css";
import Grandpa from "./Component/Listofcomponents/Grandpa";
import Reusable from "./Component/Reusable/Reusable";

function App() {
  // const handleSign = (data) => {
  //   console.log(data, "Sign data");
  // };
  // const handleUpdate = (data) => {
  //   console.log(data, "Update data");
  // };
  return (
    <>
    <Grandpa></Grandpa>
      {/* <Reusable
        formTitle={"Sign Up"}
        handleSubmit={handleSign}
        submitBtnText={"Sign Up"}
      >
        <div>
          <p>Sign Up</p>
          <p>Please Sign Up Right now</p>
        </div>
      </Reusable>
      <Reusable
        formTitle={"Profile Update"}
        handleSubmit={handleUpdate}
        submitBtnText={"Update"}
      >
        <div>
          <p>Update</p>
          <p>Please Update Right now</p>
        </div>
      </Reusable> */}
      {/* <HookForm></HookForm> */}
      {/* <ReffForm></ReffForm> */}
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default App;
