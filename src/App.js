import { useEffect, useState } from "react";
import "./App.css";
import Camera from "./Camera";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []); // pass an empty dependency array to only run the effect once on mount

  console.log(data);
  return (
    <Camera />
    // <div className="App">
    //   {isLoading ? (
    //     <div>Loading...</div>
    //   ) : (
    //     data.map((item) => {
    //       console.log(item);
    //       return <div key={item.id}>{item.title}</div>;
    //     })
    //   )}
    // </div>
  );
}

export default App;
