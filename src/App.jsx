

function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center">
              <h1>BOOLFLIX</h1>
              <div className="form mx-3 d-flex">
                <input className="form-control" type="text" />
                <button type="submit" className="btn btn-outline-danger mx-2 fw-bold">Search...</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
