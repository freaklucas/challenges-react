import { useState,useEffect } from 'react';
import './App.css'

const URL = 'https://course-api.com/react-tours-project';

function App() {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    )
  }

  return <div>Front</div>
}

export default App;