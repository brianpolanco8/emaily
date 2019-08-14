import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import * as actions from '../../actions'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    console.log('formValues', formValues)
    console.log('formFields', formFields)
    const reviewFields = (
        formFields.map(({ name, label }, i) => {
            return (
                <div key={i}>
                    <label>{label}</label>
                    <div>{formValues[name]}</div>
                </div>
            )
        })
    )

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                onClick={onCancel}
                className={`yellow darken-3 white-text btn-flat`}
            >
                Cancel
            </button>
            <button type="submit" className="green btn-flat right white-text" onClick={() => submitSurvey(formValues)}>
                Send survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        formValues: state.form.surveyForm.values
    }
}


export default connect(mapStateToProps, actions)(SurveyFormReview)