import React, { Component } from "react";

import MyButton from "../utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: ["$100", "$150", "$250"],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Vivamus tincidunt nisi vel augue rutrum semper.",
      "Ut hendrerit tortor lectus, quis pulvinar ipsum consequat at.",
      "Mauris in dignissim metus. Integer viverra lacus quis metus pretium, vitae feugiat turpis dapibus. "
    ],
    linkTo: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purcase Tickets"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
