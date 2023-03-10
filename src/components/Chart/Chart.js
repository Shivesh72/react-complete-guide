import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxmValue = Math.max(...values)
    return <div className='chart'>
        {
            props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxmValue}
                    label={dataPoint.label}
                />)
        }
    </div>
}
export default Chart;