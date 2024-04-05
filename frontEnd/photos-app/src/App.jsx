import { useState } from 'react'
import './App.css'

function App() {

  const [informationForImg, setinformationForImg] = useState({
    title: "",
    information: "",
    url: ""
  });

  useEffect(() => {
    fetch("http://localhost:3000/api")
    .then(response => response.json())
    .then(data => setAllPhotos([...data]));
  }, []);

  const uploadImg = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: JSON.stringify(informationForImg)
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div>
        <form action="/upload" method="POST" enctype="multipart/form-data">
          <input type="file" name="image" accept="image/*" />
          <button type="submit" onClick={uploadImg}>Upload Image</button>
        </form>
      </div>
    </>
  )
}

export default App
