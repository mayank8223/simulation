import React from "react";

export class Fifth extends React.Component {
    render () {
        return (
            <div style={{ padding: 100 }}>
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Problem statement:</h2>
                        <h4>XYZ is the city needs a water supply with a pressure of minimum 30 PSI and his budget is less then tghe $XXX.</h4>
                    </div>
                    <div style={{ padding: 50 }}></div>
                    <div className="col-lg-12">
                        <h2>Market Rates For Pipe:</h2>
                        <h4>1. 1 inch Pipe Cost is : $45</h4>
                        <h4>2. 0.75 inch Pipe Cost is : $33</h4>
                        <h4>3. 0.5 inch Pipe Cost is : $28</h4>
                    </div>
                    <div className="col-lg-10"></div>
                    <div className="col-lg-2">
                        <br />
                        <a href="/simulation">
                            <button className="btn btn-primary btn-lg">Solve it</button>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}