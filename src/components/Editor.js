import React, { useState, forwardRef, useImperativeHandle } from 'react'
import MDEditor from '@uiw/react-md-editor'

const Editor = (props, ref) => {
    const [value, setValue] = useState()

    const handleChange = (value) => {
        setValue(value)
    }

    useImperativeHandle(ref, () => ({
        handleSave,
    }))

    const handleSave = () => {
        return value
    }

    return (
        <div className="container">
            <MDEditor value={value} onChange={handleChange} />
        </div>
    )
}

export default forwardRef(Editor)