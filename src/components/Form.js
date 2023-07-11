import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { useState } from "react";

const Form = () => {
  const { setIsAdding, data, setData, filteredData, setFilteredData } =
    useContext(DataContext);

  const [title, setTitle] = useState("");
  const [importance, setImportance] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setFilteredData([
      ...filteredData,
      { id: crypto.randomUUID(), title, importance },
    ]);
    setData([
      ...data,
      {
        id: crypto.randomUUID(),
        title,
        importance: importance ? "important" : "not important",
      },
    ]);

    console.log(data)
  };

  return (
    <div className="card text-bg-secondary text-white">
      <div className="card-header bg-dark text-white d-flex justify-content-between">
        <h5 className="d-inline-block mt-2">Add New</h5>
        <button
          className="btn btn-outline-danger"
          onClick={() => {
            setIsAdding(false);
          }}
        >
          X
        </button>
      </div>
      <div className="card-body">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Todo Name
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-check m-auto">
            <input
              type="checkbox"
              className="form-check-input"
              checked={importance}
              onChange={() => {
                setImportance((prevState) => !prevState);
              }}
            />
            <label className="form-check-label " htmlFor="exampleCheck1">
              if important Check this
            </label>
          </div>
        </form>
      </div>
      <div>
        <div className="card-footer">
          <button
            type="submit"
            className="btn btn-primary w-25"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
