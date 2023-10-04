import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface AreaProps {
    colorData: string[];
    data: any;
    dualData?: any;
    seriesNames?: any;
}

const Area = ({ colorData, data, dualData, seriesNames }: AreaProps) => {
    const options = {
        chart: {
            id: "realtime",
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        colors: colorData,
        stroke: { width: 2, curve: 'smooth' },
        dataLabels: { enabled: false },
        xaxis: {
            categories: data?.map((data: any) => data.time.split(" ")[0]),
            labels: {
                style: {
                    colors: "#fff"
                }
            },
        },
        yaxis: {
            show: true,
            labels: {
                style: {
                    colors: "#fff"
                }
            },
        },
        grid: {
            row: {
                opacity: 0,
            },
            column: {
                opacity: 0,
            },
        },

        legend: {
            show: true,
            labels: {
                colors: "#fff",
            },
        },
    }

    return (
        <Chart
            type="area"
            height={
                dualData ? 318: 300
            }
            width='250%'
            options={options as any}
            {...(dualData ? {
                series: [{
                    name: seriesNames[0],
                    data: data.map((data: any) => data.value)
                },
                {
                    name: seriesNames[1],
                    data: dualData.map((data: any) => data.value)
                }] }
            : {
                series: [{
                    name: seriesNames[0],
                    data: data.map((data: any) => data.value)
                }]
            })}
        />
    )
}

export default Area