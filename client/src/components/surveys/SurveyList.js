import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return (
      this.props.surveys &&
      this.props.surveys.reverse().map((survey, i) => {
        return (
          <div className="card blue-grey darken-1" key={i}>
            <div className="card-content white-text">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a href="/">Yes: {survey.yes}</a>
              <a href="/">No: {survey.no}</a>
            </div>
          </div>
        );
      })
    );
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys: surveys.surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
