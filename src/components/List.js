import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { useState } from "react";

const List = () => {
  const { setFilteredData, filteredData, setIsAdding, data, setData } =
    useContext(DataContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState('');

  const handleDelete = (id) => {
    setFilteredData(data.filter((el) => el.id !== id));
    setData(data.filter((el) => el.id !== id))
  };

  const handleSearch = (e) => {
    setFilteredData(data.filter((el) => el.title.includes(e.target.value)));
  };

  const handleSave = (id) =>{
    const tempData = [...data]
    const index = tempData.findIndex( obj => obj.id === id);
    tempData[index].title = editingValue;
    setData(tempData);
    setFilteredData(tempData);
    setIsEditing(false);
  }

  return (
    <div className="card text-bg-dark shadow-lg">
      <ul className="list-group list-group-flush overflow-auto" style={{maxHeight: '50vh'}}>
        {filteredData &&
          filteredData.map((el) => (
            <li
              className={`list-group-item list-group-item-action d-flex justify-content-between ${
                el.importance === "important"
                  ? "list-group-item-danger"
                  : "list-group-item-success"
              }`}
              key={el.id}
            >
              {isEditing !== el.id && <span className="me-">{el.title}</span>}
              {isEditing && isEditing === el.id && <input
              type="text"
              value={editingValue}
              onChange={(e) => {setEditingValue(e.target.value)}}
            />}
              <div>
                <button className="btn btn-outline-warning me-2" onClick={() =>{ setIsEditing(prevState => prevState ===false ? el.id : false); setEditingValue(el.title)}}>{isEditing === el.id ? 'close' : 'Edit'}</button>
                {isEditing !== el.id && <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    handleDelete(el.id);
                  }}
                >
                  X
                </button>}
                {isEditing && isEditing=== el.id && <button
                  className="btn btn-success"
                  onClick={() => {handleSave(el.id)}}
                >
                  Save
                </button>}
              </div>
            </li>
          ))}
      </ul>
      <div className="card-footer text-bg-secondary text-white">
        <form
          className="m-3"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Search
            </label>
            <input
              type="text"
              className="form-control d-inline"
              onChange={handleSearch}
            />
          </div>
        </form>
        <div className="m-5">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              setIsAdding(true);
            }}
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
