import { useMemo, useEffect, useContext } from 'react';
import './App.css';
import DataContext from './contexts/DataContext';
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './pages/TodoList';

function App() {

  const { setFilteredData, setData } = useContext(DataContext);

  const SAMPLE_DATA = useMemo(() =>{
    return [
      { id: 1, title: "buy milk", importance: "not important" },
      { id: 2, title: "buy coffee", importance: "not important" },
      { id: 3, title: "take out trash", importance: "important" },
      { id: 4, title: "take bus tickets", importance: "important" },
      { id: 5, title: "buy shit", importance: "important" },
      { id: 6, title: "take out trash", importance: "important" },
      { id: 7, title: "buy some other shit", importance: "important" },
    ]
  }, [])

  useEffect(() =>{
    setFilteredData(SAMPLE_DATA)
    setData(SAMPLE_DATA)
  },[SAMPLE_DATA, setFilteredData, setData])

  return (
    <div className="container-fluid bg-dark bg-gradient">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
