import { AreaChart,
         CartesianGrid, 
         XAxis,
         YAxis, 
         Tooltip, 
         ResponsiveContainer, 
         Area } 
         from 'recharts';

const AreaChart_ReCharts = () => {
    const data  = [
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
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
      </ResponsiveContainer>

      </div>
      );
}
 
export default AreaChart_ReCharts;