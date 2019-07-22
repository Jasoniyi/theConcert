import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 45
  };

  getPercentage = () => {
    if (this.state.discountStart < 45) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setInterval(() => {
      this.getPercentage();
    }, 500);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.getPercentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase before July Ending</h3>
              <p>
                Etiam odio justo, laoreet eget blandit a, maximus quis turpis.
                Sed in arcu in velit laoreet pellentesque eu a mauris. Praesent
                ac est varius, blandit risus et, fringilla orci.
              </p>

              <MyButton text="Purchase Tickets" bck="#ffa800" color="#ffffff" />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
