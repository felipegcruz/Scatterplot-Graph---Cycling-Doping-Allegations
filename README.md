# Scatterplot Graph - Allegations of Doping in Professional Cyclists

This project is a scatterplot graph that visualizes allegations of doping among professional cyclists over the years. The data used for this graph is sourced from the freeCodeCamp dataset repository.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Data Source](#data-source)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

The scatterplot graph represents each cyclist's performance on the x-axis in terms of the year they participated and on the y-axis in terms of the time taken to complete the race. The data points are represented by dots, where the color indicates whether doping allegations were made against the cyclist or not.

## Features

- Interactive graph with tooltips: Hovering over each data point reveals additional information about the cyclist, including their name, nationality, place, year, time, and whether doping allegations were made against them.
- Legend: A legend is provided to differentiate between cyclists with doping allegations and those without.

## Data Source

The dataset used for this graph is available in JSON format and is sourced from the following URL:

[https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json)

The data is preprocessed to convert the "Time" attribute from string format ('%M:%S') to JavaScript Date objects.

## Installation

To run the project locally, follow these steps:

1. Clone the repository or download the project files.

```
git clone https://github.com/fcruz1612/https://github.com/felipegcruz/Scatterplot-Graph---Cycling-Doping-Allegations
```

2. Navigate to the project directory.

```
cd your_repository
```

3. Open the `index.html` file in your preferred web browser.

## Usage

Once you have the graph displayed in your browser, you can interact with it in the following ways:

- Hover over any data point to see a tooltip with detailed information about the cyclist.
- Use the x-axis to explore the performance of cyclists in different years.
- Use the y-axis to compare the time taken by cyclists to complete the race.
- The legend on the graph helps distinguish cyclists with doping allegations from those without.

## Dependencies

The project relies on the following libraries:

- [D3.js](https://d3js.org/): A JavaScript library for creating interactive data visualizations in web browsers.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to explore and analyze the data presented in the graph! If you encounter any issues or have suggestions for improvements, please don't hesitate to open an issue or submit a pull request. Happy visualizing!
