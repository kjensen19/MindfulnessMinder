import { Radar } from "react-chartjs-2";
import { radialLinear } from 'chart.js'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { useSelector } from 'react-redux'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale

);

// 'rgba(255, 99, 132, 0.2)',
// 'rgba(54, 162, 235, 0.2)',
// 'rgba(255, 206, 86, 0.2)',
// 'rgba(75, 192, 192, 0.2)',
// 'rgba(153, 102, 255, 0.2)',
// 'rgba(255, 159, 64, 0.2)',

function RadarChart() {
    const dayRes = useSelector(store => store.assesment)
    const data = {
        labels: ['Physical', 'Emotional', 'Mental', 'Psychosocial'],
        datasets: [{
          label: new Date(dayRes.date).toDateString(),
          data: [dayRes.area_one, dayRes.area_two, dayRes.area_three, dayRes.area_four],
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255, 99, 132, 1)'
        }
    ]  
    }

    const optionz =  {
        scales: {
            r:{
                beginAtZero: true
            },
        }
    }
    

    // const data = {
    //     labels: ['Physical', 'Emotional', 'Mental', 'Psychosocial'],
    //     datasets: [{
    //       label: 'October 1st',
    //       data: [4, 1, 5, 2],
    //       backgroundColor: 'rgba(255, 99, 132, 0.4)',
    //       borderColor: 'rgba(255, 99, 132, 1)'
    //     },
    //     {
    //       label: 'October 2nd',
    //       data: [4, 3, 2, 5],
    //       backgroundColor: 'rgba(54, 162, 235, 0.4)',
    //       borderColor: 'rgba(54, 162, 235, 1)'
    //     },
    //     {
    //       label: 'October 3rd',
    //       data: [1, 5, 3, 4],
    //       backgroundColor: 'rgba(255, 206, 86, 0.4)',
    //       borderColor: 'rgba(255, 206, 86, 1)'
    //     },
    //     {
    //       label: 'October 4rd',
    //       data: [3, 2, 1, 5],
    //       backgroundColor: 'rgba(75, 192, 192, 0.4)',
    //       borderColor: 'rgba(75, 192, 192, 1)'
    //     },
    //     {
    //       label: 'October 5rd',
    //       data: [1, 2, 1, 2],
    //       backgroundColor: 'rgba(153, 102, 255, 0.4)',
    //       borderColor: 'rgba(153, 102, 255, 1)'
    //     },
    //     {
    //       label: 'October 6rd',
    //       data: [5, 2, 3, 4],
    //       backgroundColor: 'rgba(255, 259, 64, 0.4)',
    //       borderColor: 'rgba(255, 259, 64, 1)'
    //     }]
    // }
    
    
    

    return(
        <Radar data={data} options={optionz}/>
    )
}

export default RadarChart;