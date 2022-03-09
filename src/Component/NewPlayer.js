import React, { useState } from "react";

export default function NewPlayer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const posts = [
    {
      id: "1",
      title: "rem",
      body: "adalah aku",
    },
  ];
  const id = posts[posts.length - 1].id + 1;

  const post = {
    id,
    email,
    password,
  };

  const submit = (e) => {
    posts.push(post);
  };

  console.log(posts);

  return (
    <div className="form-body">
    <div className="row">
      <div className="form-holder">
        <div className="form-content">
          <div className="form-items bg-warning">
            <form onClick={submit()}>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
