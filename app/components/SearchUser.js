import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then((response) => {
      this.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
      this.props.updateRepos(response.data);
    });
  }

  render() {
    return (
      <div className="jumbotron bg-success">
        <h1 className="text-capitalize text-center">GitHub Search</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <p className="text-center">Username</p>
              <input
                type="text"
                ref="username"
                className="form-control"
                placeholder="Ex: brunooojapa"
                />
            </div>
            <button
              type="submit"
              className="form-control btn btn-success">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;