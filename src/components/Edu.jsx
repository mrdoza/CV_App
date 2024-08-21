function Edu({ edu, onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();

    const eduData = new FormData(e.target);
    const data = Object.fromEntries(eduData.entries());

    onSubmit(data);
  };

  return (
    <>
      <h3 className="underline">Education</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="school">
            School:
            <br />
          </label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="School"
            defaultValue={edu.school || ""}
          />
        </div>
        <div>
          <label htmlFor="from">
            From:
            <br />
          </label>
          <input
            type="date"
            name="from"
            id="from"
            defaultValue={edu.from || ""}
          />
        </div>
        <div>
          <label htmlFor="to">
            To:
            <br />
          </label>
          <input type="date" name="to" id="to" defaultValue={edu.to || ""} />
        </div>
        <div>
          <label htmlFor="degree">
            Degree:
            <br />
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            defaultValue={edu.degree || ""}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Edu;
