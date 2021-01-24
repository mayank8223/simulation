import React from 'react';
import BeautyStars from 'beauty-stars';

export class star extends React.Component {
  state = { value: 5 };
  render() {
    return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <BeautyStars
        value={this.state.value}
      />
      </div>
    );
  }
}