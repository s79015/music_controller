import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label, info}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          {/* <p className="intro">{getIntroOfPage(info)}</p> */}
          <p className="desc">{`${info}`}</p>
        </div>
      );
    }
  
    return null;
  };

const LineChart_ReCharts = () => {
    const lineChartData  = [
        { name: 'Jan', value: 30, info: 'fjkshdjlkjg'},
        { name: 'Feb', value: 10, info: 'fjkshdjlkjg' },
        { name: 'Mar', value: 50, info: 'fjkshdjlkjg' },
        { name: 'Apr', value: 20, info: 'fjkshdjlkjg' },
        { name: 'May', value: 80, info: 'fjkshdjlkjg' },
        { name: 'Jun', value: 30, info: 'fjkshdjlkjg' },
        { name: 'July', value: 0, info: 'fjkshdjlkjg' },
        { name: 'Aug', value: 20, info: 'fjkshdjlkjg' },
        { name: 'Sep', value: 100, info: 'fjkshdjlkjg' },
        { name: 'Oct', value: 55, info: 'fjkshdjlkjg' },
        { name: 'Nov', value: 60, info: 'fjkshdjlkjg' },
        { name: 'Dec', value: 80, info: 'fjkshdjlkjg' }
      ];

    return ( 
      // <div style={{ width: '100%', height: 300 }}>
      //   <ResponsiveContainer>
          <LineChart width={900} height={300} data={lineChartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="value" stroke="#8884d8"  activeDot={{ r: 8 }} label="value"/>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip info="lineChartData.info"/>} />
              <Legend />
          </LineChart>
      //   </ResponsiveContainer>
      // </div>
     );
}
 
export default LineChart_ReCharts;