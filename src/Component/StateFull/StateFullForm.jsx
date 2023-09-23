import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("Shawon");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleNameChanges = (e) => {
    setName(e.target.value);
  };
  const handleEmailChanges = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("PassWord Must be more then six Characters");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  const handlePasswordChanges = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <h1> This is StateFull Form</h1>
      <form onClick={handleSubmit}>
        <input
          onChange={handleNameChanges}
          value={name}
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
        />
        <br />
        <input
          onChange={handleEmailChanges}
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
        />
        <br />
        <input
          onChange={handlePasswordChanges}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
