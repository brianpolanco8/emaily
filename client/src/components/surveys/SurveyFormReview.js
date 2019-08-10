import React from 'react'

export default ({ onCancel }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <button
                onClick={onCancel}
                className={`yellow darken-3 btn-flat`}
            >
                Cancel
            </button>
        </div>
    )
}