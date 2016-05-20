var MyButton = React.createClass({
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
        $.post("http://localhost:3000/create_event", this.state, function(data){
          if(data==='done') {
            alert('form submitted!')
          }
        });
      },
      render: function() {
        return(
        <div className="container">
          <button type="button" className="my-button btn btn-success btn-md" data-toggle="modal" data-target="#myModal">Create Fundraising Event</button>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Create Fundraising Event</h4>
                </div>
                <div className="modal-body">
                <form onSubmit={this.onSubmit}>

                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label">Event Title</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="Event Title" onChange={this.handleChange('title')} value={this.state.title}></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label">Organization</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="Organization Name" onChange={this.handleChange('name')} value={this.state.name}></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label">Location</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="Location" onChange={this.handleChange('location')} value={this.state.location}></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label">Start Date</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="Start Date" onChange={this.handleChange('start')} value={this.state.start}></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label" onChange={this.handleChange('end')} value={this.state.end}>End Date</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="End Date" onChange={this.handleChange('end')} value={this.state.end}></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-3 form-control-label">Description</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="Description" onChange={this.handleChange('desc')} value={this.state.desc}></input>
                    </div>
                  </div>
                </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={this.onSubmit}>Submit</button>
                </div>
              </div>

            </div>
          </div>

        </div>
        )
      }
    })

    // ReactDOM.render(
    //   <App />,
    //   document.getElementById('root')

    // )
