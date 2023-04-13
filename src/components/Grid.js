import React, { useEffect, useRef } from 'react'
import pq from 'pqgridf'

const Grid = (data) => {
    const gridref = useRef()
    useEffect(() => {
        pq.grid(gridref.current, data.props)
    }, [data.props])

    return (
        <div>
            <div ref={gridref}></div>
        </div>
    )
}

export default Grid