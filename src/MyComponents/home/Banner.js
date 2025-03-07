import React from "react";
import banner from "../../assets/rev/assets/1-51.jpg"

export default function Banner() {
  return (
    <div>
      <p className="rs-p-wp-fix"></p>
      <rs-module-wrap
        id="rev_slider_24_1_wrapper"
        data-alias="home-1"
        data-source="gallery"
        style={{
          visibility: "hidden",
          background: "transparent",
          padding: 0,
          margin: "0px auto",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <rs-module id="rev_slider_24_1" data-version="6.5.19">
          <rs-slides>
            <rs-slide
              style={{ position: "absolute" }}
              data-key="rs-84"
              data-title="Slide"
              data-thumb="rev/assets/1-51-50x100.jpg"
              data-anim="ms:600;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src={banner}
                alt="Slide Background"
                title="1-51.jpg"
                className="rev-slidebg tp-rs-img"
                data-no-retina=""
              />
              {/* Text Layer */}
              <rs-layer
                id="slider-24-slide-84-layer-0"
                data-type="text"
                data-color="#666666"
                data-rsp_ch="on"
                data-xy="xo:30px;y:m;yo:2px,17px,29px,17px;"
                data-text="w:normal;s:16,16,14,12;l:32,24,22,20;fw:600;"
                data-dim="w:654px,565px,436px,268px;h:auto,auto,45px,27px;"
                data-vbility="t,t,t,f"
                data-frame_0="x:50,39,22px,13px;y:0,0,0px,0px;"
                data-frame_1="x:0,0,0px,0px;y:0,0,0px,0px;st:1100;sp:1000;sR:1100;"
                data-frame_999="o:0;st:w;sR:6900;"
                style={{
                  zIndex: 11,
                  fontFamily: "'Quicksand'",
                }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </rs-layer>

              {/* Subheading */}
              <rs-layer
                id="slider-24-slide-84-layer-1"
                data-type="text"
                data-color="#4C906F"
                data-rsp_ch="on"
                data-xy="xo:41px,38px,38px,39px;y:m;yo:-197px,-154px,-121px,-78px;"
                data-text="w:normal;s:14,14,14,13;l:22,22,26,21;fw:600;"
                data-dim="w:auto,auto,auto,144px;"
                data-frame_0="x:50,39,29,17;"
                data-frame_1="st:600;sp:1000;sR:600;"
                data-frame_999="o:0;st:w;sR:7400;"
                style={{
                  zIndex: 9,
                  fontFamily: "'Quicksand'",
                  textTransform: "uppercase",
                }}
              >
                Passion for caring
              </rs-layer>

              {/* Main Heading */}
              <rs-layer
                id="slider-24-slide-84-layer-2"
                data-type="text"
                data-color="#18100f"
                data-rsp_ch="on"
                data-xy="xo:30px,30px,30px,31px;y:m;yo:-105px,-75px,-50px,-30px;"
                data-text="w:normal;s:64,48,42,22;l:72,56,50,30;fw:600;"
                data-border="boc:#14457b;bow:1px,1px,1px,1px;"
                data-frame_0="x:50,39,29,17;"
                data-frame_1="st:900;sp:1000;sR:900;"
                data-frame_999="o:0;st:w;sR:7100;"
                style={{
                  zIndex: 10,
                  fontFamily: "'Quicksand'",
                  textTransform: "capitalize",
                }}
              >
                Genuine commitment to your health
              </rs-layer>

              {/* Shape Layer */}
              <rs-layer
                id="slider-24-slide-84-layer-4"
                data-type="shape"
                data-rsp_ch="on"
                data-xy="xo:30px;yo:202px,155px,114px,85px;"
                data-text="w:normal;s:20,15,11,6;l:0,19,14,8;"
                data-dim="w:164px,158px,160px,155px;h:30px,30px,30px,25px;"
                data-border="bor:3px,3px,3px,3px;"
                data-frame_0="x:50,39,29,17;"
                data-frame_1="st:600;sp:1000;sR:600;"
                data-frame_999="o:0;st:w;sR:7400;"
                style={{
                  zIndex: 8,
                  backgroundColor: "#d3e9fb",
                }}
              ></rs-layer>

              {/* Button */}
              <a
                id="slider-24-slide-84-layer-6"
                className="rs-layer pq-button rev-btn"
                href="about-us.html"
                target="_self"
                data-type="button"
                data-rsp_ch="on"
                data-xy="xo:27px,30px,30px,30px;y:m;yo:93px,97px,104px,37px;"
                data-text="w:normal;s:14,16,16,12;l:22,24,30,20;fw:600;a:left,left,center,center;"
                data-dim="minh:0px,none,none,none;"
                data-padding="t:15,15,10,10;r:30,30,25,20;b:15,15,10,10;l:30,30,25,20;"
                data-border="bor:3px,3px,3px,3px;"
                data-frame_0="x:50,39,29,17;"
                data-frame_1="st:1300;sp:1000;sR:1300;"
                data-frame_999="o:0;st:w;sR:6700;"
                data-frame_hover="bgc:#14457b;bor:3px,3px,3px,3px;bos:solid;sp:100;bri:120%;"
                style={{
                  zIndex: 12,
                  backgroundColor: "#4C906F",
                  fontFamily: "'Quicksand'",
                  textTransform: "uppercase",
                }}
              >
                <span className="text">Read More</span>
                <i className="ion ion-plus-round"></i>
              </a>
            </rs-slide>
          </rs-slides>
        </rs-module>
      </rs-module-wrap>
    </div>
    
  );
}
