import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registering the components we need for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
    responsive: true,

    plugins: {
        legend: {
            display: true,
        },
        title: {
            display: true,
            text: 'Total Trades vs Date',
        },
    },

};

// Assuming `dataProps` is the prop containing your data
const AreaChart = ({ dataProps }) => {
    const labels = [].concat(...dataProps.map(item => item.data.map(dataItem => dataItem.Start_Date)));
    const dataValues = [].concat(...dataProps.map(item => item.data.map(dataItem => dataItem.Total_Trades)));

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Trades',
                data: dataValues,
                fill: true,
                backgroundColor: 'rgba(135,206,250,0.2)',
                borderColor: 'rgb(0, 123, 255)',
                borderWidth: 1,
            },
        ],
    };

    return <Line className='w-2/4' options={options} data={data} />;
};

export default AreaChart;
