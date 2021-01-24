import React from "react";



export const first = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ padding: 20 }}>
      <div>
        <h1>Learn About Good and bad Plumbing decision</h1>
        <div style={{ padding: 100 }}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vBEvbEeC8wk" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
              <br />

              <div className="row">
                <div className="col-lg-11"></div>
                <div className="col-lg-1">
                  <a href="/second">
                    <button className="btn btn-primary btn-lg">Next</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
