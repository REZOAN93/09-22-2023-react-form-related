import useInputState from "../../hooks/useInputstate";

const HookForm = () => {
  // const [name, handlenameChanges] = useInputState('Shawon');
  const emailState = useInputState('Shawon@gmail.com');

  const handleSubmit = (e) => {
    console.log("Form Submitted", emailState.value);
    e.preventDefault();
    // console.log("Form DAta",name)
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> This is Hooks Form</h1>
        {/* <input value={name} onChange={handlenameChanges} type="name" name="name" id="" /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="email" name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
