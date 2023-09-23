const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.password.value)
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> This is Form</h1>
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
