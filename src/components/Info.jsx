function Info() {
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data.name);
  };

  return (
    <>
      <h3>Info</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">
            Your Name:
            <br />
          </label>
          <input type="text" name="name" id="name" placeholder="Full Name" />
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <br />
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <br />
          </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="city">
            City:
            <br />
          </label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="state">
            State:
            <br />
          </label>

          <input type="text" name="state" id="state" />
        </div>
        <div>
          <label htmlFor="zip">
            Zip:
            <br />
          </label>

          <input type="text" name="zip" id="zip" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Info;
