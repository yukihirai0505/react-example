import React, {Component} from 'react';
import User from "../User/index";
import ReactDOM from 'react-dom';

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    ReactDOM.render(
      <User username={this._input.value} />,
      document.getElementById('container')
    )
  }

  render() {
    return (
      <section className="container home">
        <form
          className="form-inline"
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a GitHub user..."
                className="form-control"
                ref={ref => (this._input = ref)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Go
          </button>
        </form>
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
