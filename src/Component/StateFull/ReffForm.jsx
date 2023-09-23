import { useEffect, useRef } from "react";

const ReffForm = () => {
  const nameReff = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //   showing the cursor in the name field
  useEffect(() => {
    nameReff.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameReff.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> This is Form</h1>
        <input ref={nameReff} type="text" name="name" id="" />
        <br />
        <input ref={emailRef} defaultValue={"shawon@gmail.com"} type="email" name="email" id="" />
        <br />
        <input ref={passwordRef} type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReffForm;
