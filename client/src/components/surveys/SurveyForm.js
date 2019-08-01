import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class SurveyForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <h1>SurveyForm</h1>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm)