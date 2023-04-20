import React from "react";
import { HashLink } from "react-router-hash-link";
import Logo4 from "../../../../../assets/images/search.svg";
import styled from "styled-components";

function Jobs() {
  const Our = styled.div`
    .position-title {
      font-size: 58px;
      line-height: 76px;
      font-style: normal;
      font-weight: 700;
      text-align: center;
      font-family: Google Sans, sans-serif;
    }
    .search-box {
      flex: 1 1;
      padding: 10px 20px;
      border-radius: 30px;
      overflow: hidden;
      border: #efefef;
      outline: none;
      background-color: #efefef;
    }
    .btn-search {
      margin-top: 24px;
      text-align: center;
    }
    .search-icon {
      padding: 0.7rem 1.1rem 0.7rem 0.7rem;
      font-size: 1.6em;
      color: #101010;
      background: transparent;
      outline: none;
    }
    .btn-filter {
      border-radius: 30px;
      padding: 10px 16px;
      font-size: 16px;
      line-height: 24px;
    }
    .btn-send-select {
      background: #a5b862 !important;
      border-color: #a5b862 !important;
      color: #f8f7f7;
      text-shadow: 1px 0 0;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      border-radius: 64px;
    }
    .btn-primary {
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
    button {
      font-family: inherit;
      margin-left: 15px;
    }
    .btn-send {
      border-color: #222;
      color: #222;
      background: #fff;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      border-radius: 64px;
    }
    .search-jobs {
      display: flex;
      border-radius: 30px;
      background: #efefef;
      margin: 0 auto;
      width: 55%;
      margin-bottom: 30px;
    }
  `;
  return (
    <Our>
      <nav>
        <HashLink smooth to="/#jobs"></HashLink>
      </nav>
      <section id="jobs">
        <div className="position">
          <div className="position-title">
            <span>Our available jobs</span>
          </div>
          <div className="btn-search">
            <div className="search-jobs">
              <input
                type="text"
                className="search-box"
                placeholder="Looking for.."
              />
              <img className="search-icon" src={Logo4} />
            </div>
            <div>
              <button
                type="button"
                className="btn-send-select btn-filter btn btn-primary"
              >
                <span>All</span>
              </button>
              <button
                type="button"
                className="btn-send btn-filter btn btn-primary"
              >
                <span>Tech Office</span>
              </button>
              <button
                type="button"
                className="btn-send btn-filter btn btn-primary"
              >
                <span>Sale/Marketing Office</span>
              </button>
              <button
                type="button"
                className="btn-send btn-filter btn btn-primary"
              >
                <span>Back Office</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Our>
  );
}

export default Jobs;
