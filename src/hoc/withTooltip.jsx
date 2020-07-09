import React from "react";

function withTooltip(Component) {
  return class WithTooltip extends React.Component {
    state = { showTooltip: false };

    onMouseOut = () => {
      this.setState({ showTooltip: false });
    };

    onMouseOver = () => {
      this.setState({ showTooltip: true });
    };

    render() {
      return (
        <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
          <Component showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withTooltip;
