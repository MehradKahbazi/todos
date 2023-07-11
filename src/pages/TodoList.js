import { useContext } from "react";
import Form from "../components/Form";
import List from "../components/List";
import './TodoList.css';
import DataContext from "../contexts/DataContext";

const TodoList = () => {

    const { isAdding } = useContext(DataContext);
    return (
      <div className="container">
        <div className="row d-flex justify-content-evenly align-items-center full-page">
          <div className="col-md-4">
            <List />
          </div>
          {isAdding && <div className="col-md-5">
            <Form />
          </div>}
        </div>
      </div>
    );
  };
  
  export default TodoList;