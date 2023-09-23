const Reusable = ({ formTitle, handleSubmit, submitBtnText, children }) => {

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
      {children}
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
