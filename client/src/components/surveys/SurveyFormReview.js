import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'

const SurveyFormReview = ({ onCancel, formValues }) => {
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
                className={`yellow darken-3 btn-flat`}
            >
                Cancel
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

export default connect(mapStateToProps)(SurveyFormReview)