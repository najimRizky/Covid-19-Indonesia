import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function doughnutChart(props) {
    const arr = [];
    arr.push(props.data['laki-laki'])
    arr.push(props.data['perempuan'])
    return(
        <Doughnut
        data={
            {
                labels: ['Laki-laki', 'Perempuan'],
                datasets:[
                    {
                        data: arr,
                        backgroundColor: [ '#FF5733', '#6F26AB' ]
                    },
                ],
            }
        }
        height={150}
        options={{
            maintainAspectRatio: true
        }}
        />
    )
}

export default doughnutChart;
