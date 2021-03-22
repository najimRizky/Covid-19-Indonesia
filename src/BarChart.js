import React from 'react'
import { Bar } from 'react-chartjs-2';

function barChart(props) {
    const arr = [];
    arr.push(props.data[0]["0-5"])
    arr.push(props.data[1]["6-18"])
    arr.push(props.data[2]["19-30"])
    arr.push(props.data[3]["31-45"])
    arr.push(props.data[4]["46-59"])
    arr.push(props.data[5]["≥ 60"])
    
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