var React = require('react');
var Link = require('react-router-dom').Link;

class About extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<h1>Github User Search</h1>
				<p>This app is a remix of the one developed by Tyler McGinnis for his course <a href="https://tylermcginnis.com">React Fundemetals</a> (tylermcginnis.com) and here is his <a href="https://github.com/tylermcginnis">Github repo</a> (https://github.com/tylermcginnis)</p>			
  				<iframe src="https://www.youtube.com/embed/_FrOQC-zEog" width="560" height="315" frameborder="0" allowfullscreen></iframe>
			</div>)
	}
}

module.exports = About;