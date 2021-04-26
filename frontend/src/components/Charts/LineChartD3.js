import { useEffect, useState, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

const LineChartD3 = () => {
    const [lineChartData, setlineChartData] = useState([
                { name: 'Jan', value: 30 },
                { name: 'Feb', value: 10 },
                { name: 'Mar', value: 50 },
                { name: 'Apr', value: 20 },
                { name: 'May', value: 80 },
                { name: 'Jun', value: 30 },
                { name: 'July', value: 0 },
                { name: 'Aug', value: 20 },
                { name: 'Sep', value: 100 },
                { name: 'Oct', value: 55 },
                { name: 'Nov', value: 60 },
                { name: 'Dec', value: 80 }
              ]);
    
    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
    const svgRef = useRef();
   
    
    

    useEffect(() => {
        const svg = select(svgRef.current);

        const xScale = scaleLinear()
            .domain([0, data.length-1])
            .range([0,300]);

        const yScale = scaleLinear()
            .domain([0, 75])
            .range([150, 0]);


        const xAxis = axisBottom();

        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal);

        svg
            .selectAll("path")
            .data([data])
            .join("path")
            .attr('d', myLine)
            .attr('fill', 'none')
            .attr('stroke', 'blue');
       
    }, [data]);
   

    return ( 
        <div>
            <svg ref={svgRef}>
                
            </svg>
            <br />
            <button onClick={() => setData(data.map(value => value + 5))}>
                Update data
                </button>
            <button onClick={() => setData(data.filter(value => value < 35))}>
                Filter data
            </button>
        </div>
        
        );
}
 
export default LineChartD3;