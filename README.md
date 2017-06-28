# Gradient Partitioner [under development]
A simple library to slice gradient for node and browser.

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

## To Do
* 2d gradient with angle
* Radial gradients
* Serialize to legacy browsers

## License
```
MIT License

Copyright (c) 2017 Mateus Calza
```
