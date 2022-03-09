import React from "react";

const Search = () => {
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items bg-warning">
              <h3>Searching Player</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" novalidate>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Username"
                    required
                  />
                  <div className="valid-feedback">Username field is valid!</div>
                  <div className="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Experience"
                    placeholder="Experience"
                    required
                  />
                  <div className="valid-feedback">
                    Experience field is valid!
                  </div>
                  <div className="invalid-feedback">
                    Experience field cannot be blank!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="Level"
                    placeholder="Level"
                    required
                  />
                  <div className="valid-feedback">Level field is valid!</div>
                  <div className="invalid-feedback">
                    Level field cannot be blank!
                  </div>
                </div>

                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
