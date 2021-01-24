import React from "react";

const PlumbingDecision = (props) => {
  const { onSelect, name, value, src } = props;

  return (
    <div>
      <img src={src} style={{ width: 200, height: 200 }} />
      <br />
      <span>
        <label htmlFor="ay">Yes</label>
        <input
          type="radio"
          id="ay"
          onClick={() => onSelect(name, true)}
          checked={value === true}
        />
      </span>
      <span>
        <label htmlFor="an">No</label>
        <input
          type="radio"
          id="ny"
          onClick={() => onSelect(name, false)}
          checked={typeof value === "boolean" && !value}
        />
      </span>
    </div>
  );
};

export class Second extends React.Component {
    
  state = {
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null,
    step6: null,
  };

  onSelect = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { step1, step2, step3, step4, step5, step6 } = this.state;
    return (        
        <div style={{ padding: 20 }}>
        <div>
            <h1>Identify good plumbing decision</h1>
      <div style={{ padding: 50 }}>
        <div className="row" style={{ marginBottom: 10 }}>
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/khja7XQ.jpg"}
              onSelect={this.onSelect}
              name="step1"
              value={step1}
            />
          </div>
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/fpva4ji.jpg"}
              onSelect={this.onSelect}
              name="step2"
              value={step2}
            />
          </div>
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/MJeV0mu.jpg"}
              onSelect={this.onSelect}
              name="step3"
              value={step3}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/tukFcRD.jpg"}
              onSelect={this.onSelect}
              name="step4"
              value={step4}
            />
          </div>
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/EQKLmfu.jpg"}
              onSelect={this.onSelect}
              name="step5"
              value={step5}
            />
          </div>
          <div className="col-lg-4">
            <PlumbingDecision
              src={"https://i.imgur.com/cPMMoUI.jpg"}
              onSelect={this.onSelect}
              name="step6"
              value={step6}
            />
          </div>
        </div>
        <div className="row">
            <div className="col-lg-11">

            </div>
            <div className="col-lg-1">
                <a href="/third">
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
