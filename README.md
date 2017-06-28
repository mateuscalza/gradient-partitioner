# Gradient Partitioner
A simple library to slice gradients for node and browser.

## Install
```
npm install --save gradient-partitioner
```

## Usage
```javascript
import GradientPartitioner from 'gradient-partitioner'

const range = new GradientPartitioner('#F05F57', '#360940', 0, 100)
range.partition(0, 45).cssGradient() // linear-gradient(to right, rgb(240, 95, 85), rgb(156, 56, 77))
```

### Example
![Example](https://raw.githubusercontent.com/mateuscalza/gradient-partitioner/master/static/screenshot.png)

## To Do
* Serialize to legacy browsers
* 2d gradient with angle
* Radial gradients
* Multiple colors

## License
```
MIT License

Copyright (c) 2017 Mateus Calza
```
