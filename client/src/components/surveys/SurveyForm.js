// import _ from 'lodash'
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
]


class SurveyForm extends Component {
    renderFields() {
        return (FIELDS.map((field, i) => {
            return (
                <Field component={SurveyField} type="text" label={field.label} name={field.name} key={i} />
            )
        }))

    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <button type="submit" className={'btn right'}>Submit<i className="material-icons right">done</i></ button>
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {};
    errors.emails = validateEmails(values.emails || '')
    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = 'Required'
        };
    });

    return errors;
}

export default reduxForm({
    //ES6 shortens validate:validate key-value to only validate
    validate,
    form: 'surveyForm'
})(SurveyForm)