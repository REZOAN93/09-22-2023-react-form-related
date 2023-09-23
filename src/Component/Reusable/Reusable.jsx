const Reusable = ({ formTitle, handleSubmit, submitBtnText }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <h1>{formTitle}</h1>
      <form onSubmit={handleLocalSubmit}>
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default Reusable;
