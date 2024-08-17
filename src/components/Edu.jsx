function Edu({ onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data.name);
    onSubmit(data);
  };

  return (
    <>
      <h3>Education</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="school">
            School:
            <br />
          </label>
          <input type="text" name="school" id="school" placeholder="School" />
        </div>
        <div>
          <label htmlFor="from">
            From:
            <br />
          </label>
          <input type="date" name="from" id="from" />
        </div>
        <div>
          <label htmlFor="to">
            To:
            <br />
          </label>
          <input type="date" name="to" id="to" />
        </div>
        <div>
          <label htmlFor="degree">
            Degree:
            <br />
          </label>
          <input type="text" name="degree" id="degree" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Edu;
