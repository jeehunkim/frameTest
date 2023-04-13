import React, { useRef } from 'react'
import Button from '@mui/material/Button'
import Editor from '../../components/Editor'

const AddLogicEditor = () => {
    const ref = useRef()

    const handleSave = async () => {
        const content = ref.current.handleSave()
        console.log(content)
    }
    return (
        <>
            <Editor ref={ref} />
                <Button onClick={handleSave}>저장</Button>
        </>
    )
}

const EditorPage = () => {
    return <AddLogicEditor />
}

export default EditorPage