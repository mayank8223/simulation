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
        <h1>Learn About Optimal and Sub-Optimal Plumbing decision</h1>
        <div style={{ padding: 100 }}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-9">
            <iframe width="720" height="400" src="https://www.youtube.com/embed/hNO3SMl-amk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
