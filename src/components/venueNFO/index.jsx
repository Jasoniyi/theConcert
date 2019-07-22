import React from "react";

import Zoom from "react-reveal/Zoom";

import icon_calender from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNFO = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration="500">
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calender})`
                    }}
                  />
                  <div className="vn_title">Event date & time</div>
                  <div className="vn_desc">7 August 2019 @ 10:00 pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom delay="500" duration="500">
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow" />
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                  />
                  <div className="vn_title">Event locatio</div>
                  <div className="vn_desc">@22 crescent malebou</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNFO;
