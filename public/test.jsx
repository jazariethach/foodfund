var Jaz = React.createClass({
    	render: function() {
    		return(
        <form>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Event Title</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Event Title"></input>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Organization Name</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Organization Name"></input>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Location</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Location"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Start Date</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Start Date"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">End Date</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="End Date"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Description</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Description"></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-offset-2 col-sm-6">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </form>
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
