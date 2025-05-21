import { useState, useEffect } from "react";
import axios from "axios";
import "/node_modules/flag-icons/css/flag-icons.min.css";


function App() {

  const [film, setFilm] = useState("");
  const [selectedFilm, setSelectedFilm] = useState({});

  const getFilms = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c55ebc7d636fbf64fb69c83bfa8d0c7e&query=${film}`).then((resp) => {
      setSelectedFilm(resp.data);
      console.log(resp.data)
    })
  }

  const results = selectedFilm.results;

  let languages = {
    en: "us",
    ja: "jp",
    hi: "in",
    zh: "cn",
    ko: "kr"

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
          <div className="row g-4 p-5">
            {results && results.map((result, index) => {

              let rate = result.vote_average;

              let roundRate = Math.round(Number(rate) / 2)

              return <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-img-top">
                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w300/${result.backdrop_path}`} alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      <h4>Title : {result.title}</h4>
                      <h5>Original Title : {result.original_title}</h5>
                      <p>Language : {result.original_language} <span className={`fi fi-${languages[result.original_language] || result.original_language}`} /></p>
                      <p>Rate : {
                        [...Array(roundRate)].map((_, i) => {
                          return <span key={`full-star${i}`}><i className="fa-solid fa-star"></i></span>
                        })
                      }{[...Array(5 - roundRate)].map((_, i) => {
                        return <span key={`empty-star${i}`}><i className="fa-regular fa-star"></i></span>
                      })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </main >
    </>
  )
}

export default App
