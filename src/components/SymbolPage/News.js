import React from "react";
import PropTypes from "prop-types";

import Loader from "../Elements/Loader";

let newsDate = [];
let newsHeadline = [];
let newsImage = [];
let newsSummary = [];
let newsUrl = [];
let newsRelated = [];

class News extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  getLatestNews() {
    fetch(
      `https://cloud.iexapis.com/stable/stock/${this.props.symbol}/news?token=${process.env.REACT_APP_IEX_KEY_2}`,
    )
      .then(res => res.json())
      .then(result => {
        for (let i = 0; i < 3; i++) {
          if (typeof result[parseInt(i)] !== "undefined") {
            let date = Date(result[parseInt(i)].datetime)
              .toString()
              .split(" ");
            newsDate[parseInt(i)] = `${date[1]} ${date[2]}`;
            newsHeadline[parseInt(i)] = result[parseInt(i)].headline;
            newsUrl[parseInt(i)] = result[parseInt(i)].url;
            newsSummary[parseInt(i)] = `${result[parseInt(i)].summary
              .split(" ")
              .splice(-result[parseInt(i)].summary.split(" ").length, 17)
              .join(" ")} ...`;
            newsRelated[parseInt(i)] = result[parseInt(i)].related;
            newsImage[parseInt(i)] = result[parseInt(i)].image;
          }
        }
      })
      .then(() => {
        setTimeout(() => {
          for (let i = 0; i < newsUrl.length; i++) {
            if (document.querySelector("#img" + i) !== null) {
              document.querySelector(
                "#img" + i,
              ).style = `background-image:url(${newsImage[parseInt(i)]})`;
            }
          }
        }, 1000);
      })
      .then(() => {
        if (this._isMounted) {
          this.setState({loading: false});
        }
      });
  }
  componentDidMount() {
    this._isMounted = true;
    this.getLatestNews();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <></>
    );
  }
}

News.propTypes = {
  symbol: PropTypes.string,
};

export default News;
