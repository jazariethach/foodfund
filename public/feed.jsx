var Card = React.createClass({
  render: function() {
    return(
      <div className="card-container">
        <div>{this.props.title}</div>
        <div>{this.props.organization}</div>
        <div>{this.props.location}</div>
        <div>{this.props.start_date}</div>
        <div>{this.props.end_date}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
})


var Feed = React.createClass({
  render: function() {
    // console.log(this.state);
    if(this.props.data) {

    return(
      <div className="feed">
          {
              this.props.data.map(function(item) {
               return(<Card 
                title={item.title}
                organization={item.organization} 
                location={item.location} 
                start_date={item.start_date} 
                end_date={item.end_date}
                description={item.description}
                />)
              })
          }
      </div>
      )
    }     
  }
})

var NavBar = React.createClass({
  render: function() {
    return (
      <div className='nav-bar'>
        <ul>
          <li><a>Food Fund</a></li>
          <MyButton call={this.props.call}></MyButton>
        </ul>
      </div>
    )
  }
})

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
        // console.log(this);
        // console.log('!!!!;)xoxoxo<3');
        var self = this;
        e.preventDefault()
        $.post("http://localhost:3000/create_event", this.state, function(data){
          if(data==='done') {
            self.props.call();
          }
        });
      },
      render: function() {
        return(
        <div className="container">
          <button id="superButton" type="button" className="btn btn-success btn-md" data-toggle="modal" data-target="#myModal">Create Fundraising Event</button>

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





var App = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    var self = this;
    $.ajax({
      url: 'http://localhost:3000/feed',
      success: function(res) {
        console.log("ajax success:" + res);
        self.setState({data: res});
      }.bind(this)
    })    
  },
      calls: function() {
        var self = this;
        $.ajax({
          url: 'http://localhost:3000/feed',
          success: function(res) {
            console.log("ajax success:" + res);
            self.setState({data: res});
          }.bind(this)
        })
      },

      render: function() {
        return(
          <div>
            <NavBar call={this.calls} />
            <Feed data={this.state.data}/>
          </div>
        )
      }
    })


    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
