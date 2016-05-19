var App = React.createClass({
      getInitialState: function() {
        return {
          title: '',
          name: '',
          location: '',
          start: '',
          end: '',
          desc: ''
        };
      },
      handleChange: function (key) {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);
      },
      onSubmit: function(e) {
        e.preventDefault()
        alert('form submitted!')
      },
    	render: function() {
    		return(
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Event Title</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Event Title" onChange={this.handleChange('title')} value={this.state.title}></input>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label">Organization Name</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Organization Name" onChange={this.handleChange('name')} value={this.state.name}></input>
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label" onChange={this.handleChange('location')} value={this.state.location}>Location</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Location"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label" value={this.state.start}>Start Date</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="Start Date"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label" onChange={this.handleChange('end')} value={this.state.end}>End Date</label>
            <div className="col-sm-6">
              <input className="form-control" placeholder="End Date"></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 form-control-label" onChange={this.handleChange('desc')} value={this.state.desc}>Description</label>
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


    ReactDOM.render(
    	<App />,
    	document.getElementById('root')

    )
