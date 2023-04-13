import React, { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

const Chart = (data) => {
    const chartRef = useRef(null)
    const option = data.props

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current)
            if (option.updateAxisPointer) {
                chart.on('updateAxisPointer', function (event) {
                    const xAxisInfo = event.axesInfo[0]

                    if (xAxisInfo) {
                        const dimension =
                            xAxisInfo.value + option.updateAxisPointer.value
                        chart.setOption({
                            series: {
                                id: option.updateAxisPointer.seriesId,
                                label: {
                                    formatter: `{${option.updateAxisPointer.formatter[0]}}: {@[${dimension}]} ({${option.updateAxisPointer.formatter[1]}}%)`,
                                },
                                encode: {
                                    value: dimension,
                                    tooltip: dimension,
                                },
                            },
                        })
                    }
                })
            }

            chart.setOption(option)
        }
    }, [option])

    return (
        <div
            ref={chartRef}
            style={{
                width: '1000px',
                height: '400px',
            }}
        />
    )
}

export default Chart