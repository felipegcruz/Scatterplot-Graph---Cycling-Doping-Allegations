// JavaScript code to fetch and process the data
d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
).then(function (data) {
  // Define the dimensions and margins for the chart
  const margin = { top: 50, right: 50, bottom: 70, left: 70 };
  const width = 1000 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  // Create the SVG element and append it to the chart div
  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // Parse the date and time data
  const parseTime = d3.timeParse('%M:%S');
  data.forEach(function (d) {
    d.Time = parseTime(d.Time);
  });

  // Create scales for x and y axes
  const xScale = d3
    .scaleTime()
    .domain([d3.min(data, (d) => d.Year - 1), d3.max(data, (d) => d.Year + 1)])
    .range([0, width]);

  const yScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => d.Time))
    .range([height, 0]);

  // Create x and y axes
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

  // Append x and y axes to the SVG
  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('transform', `translate(0,${height})`)
    .call(xAxis);

  svg.append('g').attr('id', 'y-axis').call(yAxis);

  // Create dots for the data points
  svg
    .selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d) => xScale(d.Year))
    .attr('cy', (d) => yScale(d.Time))
    .attr('r', 5)
    .attr('data-xvalue', (d) => d.Year)
    .attr('data-yvalue', (d) => d.Time.toISOString())
    .attr('data-name', (d) => d.Name)
    .attr('data-nationality', (d) => d.Nationality) // Add the "Nationality" attribute
    .attr('data-place', (d) => d.Place) // Add the "Place" attribute
    .on('mouseover', function (event, d) {
      const tooltip = d3.select('#tooltip');
      tooltip.html(`
      Name: ${d.Name}<br>
      Nationality: ${
        d.Nationality
      }<br> <!-- Display the "Nationality" attribute -->
      Place: ${d.Place}<br> <!-- Display the "Place" attribute -->
      Year: ${d.Year}<br>
      Time: ${d.Time.getMinutes()}:${d.Time.getSeconds()}<br>
      ${d.Doping ? 'Doping: ' + d.Doping : 'No doping allegation'}
    `);
      tooltip.attr('data-year', d.Year);
      tooltip.style('display', 'block');
    })
    .on('mouseout', function () {
      d3.select('#tooltip').style('display', 'none');
    });

  // Create the legend
  const legend = svg
    .append('g')
    .attr('id', 'legend')
    .attr('transform', `translate(${width - 100},${height - 100})`);

  legend
    .append('rect')
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', 'steelblue');

  legend.append('text').attr('x', 30).attr('y', 15).text('Doping');

  legend
    .append('rect')
    .attr('x', 0)
    .attr('y', 30)
    .attr('width', 20)
    .attr('height', 20)
    .attr('fill', 'transparent')
    .attr('stroke', 'steelblue');

  legend.append('text').attr('x', 30).attr('y', 45).text('No Doping');
});
