import React from "react";

export class Fourth extends React.Component {
  state = {
    companyName: "",
    secret: ""
  };

  render() {
    const { companyName, secret } = this.state;
    return (
      <div style={{ padding: 100 }}>
        <div className="row">
          <div className="col-lg-12">
            <h2>
              Now you are ready to open your company name for your company
            </h2>
            <input
              className="form-control"
              type="text"
              onClick={(e) => this.setState({ companyName: e.target.value })}
              value={companyName}
              placeholder="Please enter the company name"
            />
            <br />
            <input
              className="form-control"
              type="text"
              onClick={(e) => this.setState({ secret: e.target.value })}
              value={secret}
              placeholder="Please enter the secret"
            />
          </div>
          <div className="col-lg-11"></div>
          <div className="col-lg-1">
                <br />
              <a href="/fifth">
                <button className="btn btn-primary btn-lg">Next</button>
              </a>
          </div>
        </div>
      </div>
    );
  }
}
