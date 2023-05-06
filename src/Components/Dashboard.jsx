// import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
import L from "leaflet"
// import 'leaflet/dist/leaflet.css';
// // import 'react-leaflet-markercluster/dist/styles.min.css';


// const Dashboard = () => {
//     // State variables to store data
//     const [worldwideData, setWorldwideData] = useState({});
//     // const [countriesData, setCountriesData] = useState([]);
//     const [graphData, setGraphData] = useState({});

//     // Fetch data from APIs
//     useEffect(() => {
//         // Fetching world-wide data of cases
//         axios.get('https://disease.sh/v3/covid-19/all')
//             .then(res => setWorldwideData(res.data))
//             .catch(err => console.log(err));

//         // Fetching country-specific data of cases
//         axios.get('https://disease.sh/v3/covid-19/countries')
//             .then(res => setCountriesData(res.data))
//             .catch(err => console.log(err));

//         // Fetching graph data for cases with date
//         axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
//             .then(res => setGraphData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     // Options for ApexCharts
//     const options = {
//         chart: {
//             toolbar: {
//                 show: false
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         tooltip: {
//             enabled: true
//         },
//         stroke: {
//             width: [2, 2]
//         },
//         xaxis: {
//             categories: Object.keys(graphData.cases || {})
//         }
//     };

//     // Data for ApexCharts
//     const graphDataSeries = graphData.cases && graphData.deaths && graphData.recovered ? [
//         {
//             name: 'Cases',
//             data: Object.values(graphData.cases)
//         },
//         {
//             name: 'Deaths',
//             data: Object.values(graphData.deaths)
//         },
//         {
//             name: 'Recovered',
//             data: Object.values(graphData.recovered)
//         }
//     ] : [];

//     return (
//         <div className="dashboard">

// <div>
//     <Chart
//       height={200}
//       type="line"
//       options={{
//         legend: {
//           show: false,
//         },
//         chart: {
//           height: 100,
//           type: "line",
//           toolbar: {
//             show: false,
//           },
//         },
//         stroke: {
//           curve: "smooth",
//         },
//         // xaxis: {
//         //   categories: graphDataSeries.map((trend) =>
//         //     moment(trend.meeting_start_time).format("MM-DD")
//         //   ).reverse(),
//         //   formatter: (x, y, z) => {},

//         //   lines: {
//         //     show: false,
//         //   },
//         //   labels: {
//         //     show: true,
//         //   },
//         //   axisTicks: { show: false },
//         //   crosshairs: {
//         //     width: 1,
//         //   },
//         // },
//         yaxis: {
//           min: 0,
//           max: 100,
//           lines: {
//             show: false,
//           },
//           labels: {
//             show: true,
//           },
//           axisTicks: { show: false },
//           crosshairs: {
//             width: 1,
//           },
//         },

//         dataLabels: {
//           enabled: false,
//         },
//       }}
//       series={[
//         {
//           name: 'Cases',
//           data: [worldwideData.cases || 0]
//         },
//         {
//           name: 'Deaths',
//           data: [worldwideData.deaths || 0]
//         },
//         {
//           name: 'Recovered',
//           data: [worldwideData.recovered || 0]
//         }
//       ]}
//     />
//     </div>
//             {/* World-wide Cases */}
//             {/* <div>
//     <Chart options={options} series={[
//       {
//         name: 'Cases',
//         data: [worldwideData.cases || 0]
//       },
//       {
//         name: 'Deaths',
//         data: [worldwideData.deaths || 0]
//       },
//       {
//         name: 'Recovered',
//         data: [worldwideData.recovered || 0]
//       }
//     ]} type="bar" height={200} />
//     </div> */}

//             {/* Country-wise Cases */}
//             {/* <div>
//     <Chart options={options} series={[
//       {
//         name: 'Cases',
//         data: countriesData.map(data => data.cases || 0)
//       }
//     ]} type="line" height={400} />
//     </div> */}

//             {/* Cases with Date */}
//             {/* <div>
//     <Chart options={options} series={graphDataSeries} type="line" height={220} />
//     </div> */}

//     <div>
// <Chart
//   height={200}
//   type="line"
//   options={{
//     legend: {
//       show: false,
//     },
//     chart: {
//       height: 100,
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     xaxis: {
//       categories: graphDataSeries.map((trend) =>
//         moment(trend.meeting_start_time).format("MM-DD")
//       ).reverse(),
//       formatter: (x, y, z) => {},

//       lines: {
//         show: false,
//       },
//       labels: {
//         show: true,
//       },
//       axisTicks: { show: false },
//       crosshairs: {
//         width: 1,
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 100,
//       lines: {
//         show: false,
//       },
//       labels: {
//         show: true,
//       },
//       axisTicks: { show: false },
//       crosshairs: {
//         width: 1,
//       },
//     },

//     dataLabels: {
//       enabled: false,
//     },
//   }}
//   series={graphDataSeries}
// />
//     </div>
//         </div>
//     );
// };


// export default Dashboard;



import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactApexChart from 'react-apexcharts';

function Dashboard() {
    const [data, setData] = useState({});
    const [countryData, setCountryData] = useState([]);
    const [graphData, setGraphData] = useState({})

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => setData(data));

        fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => setCountryData(data));

        const fetchData = async () => {
            const response = await fetch(
                "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
            );
            const chartdata = await response.json();
            setGraphData(chartdata);
        };
        fetchData();
    }, []);

    const keys = Object.keys(data);

    const chunkArray = (arr, chunkSize) => {
        let chunkedArray = [];
        let i = 0;

        while (i < arr.length) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
            i += chunkSize;
        }

        return chunkedArray;
    };

    const chunkedKeys = chunkArray(keys, 5);


    // show graph data
    const seriesData = [
        {
            name: "Cases",
            data: Object.values(graphData.cases || {}),
        },
        {
            name: "Deaths",
            data: Object.values(graphData.deaths || {}),
        },
        {
            name: "Recovered",
            data: Object.values(graphData.recovered || {}),
        },
    ];

    const options = {
        chart: {
            id: "covid-chart",
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true,
                    customIcons: [],
                },
                autoSelected: "zoom",
            },
            animations: {
                enabled: true,
                easing: "linear",
                speed: 1000,
                animateGradually: {
                    enabled: true,
                    delay: 150,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 1000,
                },
            },
        },
        colors: ["#008FFB", "#00E396", "#FEB019"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: Object.keys(graphData.cases || {}),
            type: "datetime",
            lines:{
                show:true,
            },
            axisTicks:{show:true},
            crosshairs:{
                width:1,
            },
            range: 90 * 24 * 60 * 60 * 1000
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                },
            },
            min: 0,
            max: Math.max(
                ...Object.values(graphData.cases || {}),
                ...Object.values(graphData.deaths || {}),
                ...Object.values(graphData.recovered || {})
            ),
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy",
            },
        },
    };

    // options={
    //     legend: {
    //       show: true,
    //     },
    //     chart: {
    //       height: 350,
    //       type: "line",
    //       toolbar: {
    //         show: true,
    //       },
    //       zoom: {
    //         enabled: true,
    //         type: "x",
    //         autoScaleYaxis: false,
    //       },
    //     },
    //     stroke: {
    //       curve: "smooth",
    //     },
    //     xaxis: {
    //       categories: graphDataLabels,
    //       lines: {
    //         show: true,
    //       },
    //       labels: {
    //         show: true,
    //       },
    //       axisTicks: { show: true },
    //       crosshairs: {
    //         width: 1,
    //       },
    //       range: 90 * 24 * 60 * 60 * 1000, // 90 days in milliseconds
    //     },
    //     yaxis: {
    //       min: 0,
    //       max:
    //         Math.max(
    //           ...graphDataCases,
    //           ...graphDataDeaths,
    //           ...graphDataRecovered
    //         ) + 10000,
    //       lines: {
    //         show: true,
    //       },
    //       labels: {
    //         show: true,
    //       },
    //       axisTicks: { show: true },
    //       crosshairs: {
    //         width: 1,
    //       },
    //     },
    //     dataLabels: {
    //       enabled: false,
    //     },
    //   }


    return (
        <div className="dashboard" >
            <div>
                <h1>Global COVID-19 Data</h1>
                <div className='dashboardInside'>
                    {chunkedKeys.map((chunk, index) => (
                        <div key={index}>
                            {chunk.map((key) => (
                                <div className='panel' key={key}>
                                    <h4>{key}</h4>
                                    <p>{data[key]}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <MapContainer className="mapDiv" center={[28, 78]} zoom={4} scrollWheelZoom={true}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {countryData.map((country) => (
                    <Marker
                        key={country.country}
                        icon={L.icon({
                            iconUrl: country.countryInfo.flag,
                            iconSize: [15, 10],
                            shadowSize: [15, 10],
                        })}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                    >
                        <Popup>
                            <div>
                                <h2>{country.country}</h2>
                                <p>Active: {country.active}</p>
                                <p>Recovered: {country.recovered}</p>
                                <p>Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>



            <Chart
                options={options}
                series={seriesData}
                type="line"
                height="400"
            />

        </div>
    );
}

export default Dashboard;
