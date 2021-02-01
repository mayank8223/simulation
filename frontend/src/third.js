import React from "react";

export class Third extends React.Component {
  render() {
    return (
        <div style={{ padding: 20 }}>
        <div>
            <h1>Practice and Learn</h1>
      <div>
        <div className="row" style={{ marginTop: 100 }}>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
             <button className="btn btn-info btn-lg">Tutorial 1</button><a href="/tutorial1">
             
            </a>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <a href="/tutorial1">
              <button className="btn btn-info btn-lg">Tutorial 2</button>
            </a>
          </div>
        </div>
        <div className="row" style={{ margin: 100 }}>
        </div>
        <div className="row">
          <div className="col-lg-11"></div>
          <div className="col-lg-1">
            <a href="/fifth">
              <button className="btn btn-primary pull-right">Next</button>
            </a>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
