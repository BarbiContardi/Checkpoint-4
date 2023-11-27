import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const API_ENDOPOINT =
    "https://my-json-server.typicode.com/typicode/demo/posts";

  const fetchData = async () => {
    const response = await axios.get(API_ENDOPOINT);
    console.log(response.data, "R");
  };
  const postData = async () => {
    const response = await axios.post(API_ENDOPOINT, {
      id: 4,
      title: "Post 4",
    });
    console.log(response.data, "C");
  };
  const updateData = async () => {
    const response = await axios.put(`${API_ENDOPOINT}/1`, { title: "Post 5" });
    console.log(response.data, "U");
  };
  const deletePost = async () => {
    const response = await axios.delete(`${API_ENDOPOINT}/2`);
    console.log(response.data, "D");
  };

  useEffect(() => {
    fetchData();
    postData();
    updateData();
    deletePost();
  }, []);

  return (
    <>
      <h1>CHECKPOINT 4</h1>
    </>
  );
}

export default App;
