function Exp({ exp, onSubmit }) {
  const submitForm = (e) => {
    e.preventDefault();

    const expData = new FormData(e.target);
    const data = Object.fromEntries(expData.entries());

    onSubmit(data);
  };

  return (
    <>
      <h3 className="underline">Experience</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="Company">
            Company:
            <br />
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company Name"
            defaultValue={exp.company || ""}
          />
        </div>
        <div>
          <label htmlFor="location">
            City:
            <br />
          </label>
          <input
            type="text"
            name="location"
            id="location"
            defaultValue={exp.location || ""}
          />
        </div>
        <div>
          <label htmlFor="start">
            Start Date:
            <br />
          </label>
          <input
            type="date"
            name="start"
            id="start"
            defaultValue={exp.start || ""}
          />
        </div>
        <div>
          <label htmlFor="end">
            End Date:
            <br />
          </label>
          <input type="date" name="end" id="end" defaultValue={exp.end || ""} />
        </div>

        <div>
          <label htmlFor="position">
            Position:
            <br />
          </label>

          <input
            type="text"
            name="position"
            id="position"
            defaultValue={exp.position || ""}
          />
        </div>
        <div>
          <label htmlFor="tasks">
            Responsibilties:
            <br />
          </label>

          <input
            type="text"
            name="tasks"
            id="tasks"
            defaultValue={exp.tasks || ""}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Exp;
