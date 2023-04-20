import { Container } from "react-bootstrap";
import Logo2 from "../../../../../assets/images/banner_2a68a37b9b.png";
import styled from "styled-components";
import Logo3 from "../../../../../assets/images/Subtract.svg";

function Content() {
  const Content = styled.div`
    .title-intro {
      font-size: 58px;
      line-height: 76px;
      font-style: normal;
      font-weight: 700;
      font-family: Google Sans, sans-serif;
      position: relative;
    }
    .info-sub {
      color: #222;
    }
    .banner > .lazy-load-image-background > img {
      max-width: 105%;
      height: auto;
    }
    .intro-img {
      position: absolute;
      right: 15px;
      bottom: 15px;
    }
    .btn-send-select {
      background: #a5b862 !important;
      border-color: #a5b862 !important;
      color: #f8f7f7;
      text-shadow: 1px 0 0;
      border-radius: 64px;
      padding: 12px 32px;
    }
    .content {
      width: 95%;
      max-width: 1120px;
      margin: auto;
      padding-top: 60px;
    }
    .intro {
      margin-top: 100px;
    }
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    #info-sub {
      margin-bottom: 32px;
    }
  `;
  return (
    <Container>
      <Content>
        <div className="intro-row row">
          <div className="intro col-md-6 col-12 ">
            <div className="info" id="info-title">
              <div className="title-intro">
                Opportunities are available at Savvycom
                <img className="intro-img" src={Logo3} />
              </div>
            </div>
            <div className="info" id="info-sub">
              Are you looking for a place where all the brilliant minds gather
              under the same roof, then look no further than Savvycom.
            </div>
            <div>
              <button
                type="button"
                className="btn-send-select button-intro btn btn-primary"
              >
                <span>View all positions</span>
              </button>
            </div>
          </div>
          <div className="banner col-md-6 col-12">
            <span className=" lazy-load-image-background opacity lazy-load-image-loaded">
              <img src={Logo2} />
            </span>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default Content;
