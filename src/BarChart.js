import React from 'react'
import { Bar } from 'react-chartjs-2';

function barChart(props) {
    const arr = [];
    arr.push(props.data["0-5_tahun"])
    arr.push(props.data["6-18_tahun"])
    arr.push(props.data["19-30_tahun"])
    arr.push(props.data["31-45_tahun"])
    arr.push(props.data["46-59_tahun"])
    arr.push(props.data["≥60_tahun"])
    
    return(
        <Bar
        data={
            {
                labels: ['0-5 tahun', '6-18 tahun', '19-30 tahun', '31-45 tahun', '46-59 tahun', 'Diatas 60 tahun'],
                datasets:[
                    {
                        label: 'Kelompok Usia',
                        data: arr,
                        backgroundColor: [ '#A569BD', '#2980B9', '#1ABC9C', '#F1C40F', '#E74C3C', '#34495E' ],
                        borderColor: 'black'
                    },
                ],
            }
        }
        height={350}
        options={{
            maintainAspectRatio: false
        }}
        />
    )
}

export default barChart;