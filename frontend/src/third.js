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
            <a href="/tutorial1">
              <button className="btn btn-info btn-lg">Tutorial 1</button>
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
          <div className="col-lg-12">
            <h3>Create your cheats</h3>
          </div>
          <div className="col-lg-12">
            <span>
              If Pipe diameter Increases than Pressure will :
              <select>
                <option value="option_1">None</option>
                <option value="option_2">decreases</option>
                <option value="option_3">increases</option>
              </select>
            </span>
          </div>
          <div className="col-lg-12">
            <span>
                If Pipe diameter Increases than Pressure will :
                <select>
                    <option value="option_1"> None</option>
                    <option value="option_2"> decreases</option>
                    <option value="option_3"> increases</option>
             </select>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11"></div>
          <div className="col-lg-1">
            <a href="/fourth">
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
