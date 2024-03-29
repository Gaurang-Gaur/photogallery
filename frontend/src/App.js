import { useEffect, useState } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("https://api.render.com/deploy/srv-chhra8grddl9a76msim0?key=XkNGA9_Gv0Iw/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);

  return (
    <div className="App">
      <Navbar />
      <Grid photos={photos} />
      <Button setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default App;