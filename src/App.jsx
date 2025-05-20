import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [film, setFilm] = useState("");
  const [selectedFilm, setSelectedFilm] = useState({});

  const getFilms = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c55ebc7d636fbf64fb69c83bfa8d0c7e&query=${film}`).then((resp) => {
      setSelectedFilm(resp.data);
    })
  }

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <h1>BOOLFLIX</h1>
              <div className="form mx-3 d-flex">
                <input value={film} onChange={(e) => { setFilm(e.target.value) }} className="form-control" type="text" />
                <button onClick={getFilms} type="submit" className="btn btn-outline-danger mx-2 fw-bold">Search...</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="card-img-top">
                  <img src="" alt="" />
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
