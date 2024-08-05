function Info({ basicInfo, setBasicInfo }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  return (
    <>
      <h3>Info</h3>
      <form>
        <div>
          <label for="name">
            Your Name:
            <br />
          </label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div>
          <label for="email">
            Email:
            <br />
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label for="phone">
            Phone:
            <br />
          </label>
          <input type="tel" name="phone" id="phone" />
        </div>
        <div>
          <label for="city">
            City:
            <br />
          </label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label for="state">
            State:
            <br />
          </label>

          <input type="text" name="state" id="state" />
        </div>
        <div>
          <label for="zip">
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
