var Jaz = React.createClass({
    	render: function() {
    		return(
    			<div className='jaz'>
    				<h1> Hi Jaz, I am in a class</h1>
    			</div>
    		)
    	}
    })


    var App = React.createClass({
    	render: function() {
    		console.log(this.props)
    		return(
    			<div>
    				<Jaz/>
    			</div>
    		)
    	}
    })


    ReactDOM.render(
    	<App jaz='hello'/>,
    	document.getElementById('root')

    )