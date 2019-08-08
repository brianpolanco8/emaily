import React from 'react';
// import prop-types from 'prop-types'

const style = {
    color: 'red'
}

export default ({ input, label, meta: { touched, error, warning } }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" {...input} />
            <blockquote style={style}>{touched && error}</blockquote>
        </div>
    );
};
