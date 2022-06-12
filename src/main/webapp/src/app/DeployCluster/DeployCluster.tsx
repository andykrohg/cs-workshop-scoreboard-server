import * as React from 'react';
import ClusterReport from './ClusterReport';


class DeployCluster extends React.Component {
  timerID;
  state = {clusterReports: []};

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateReports(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateReports() {
    fetch('/progress-reports')
    .then(res => res.json())
    .then((data) => {
      this.setState({ clusterReports: data })
    }).catch(console.log)
  }

  render() {
    return (
      <ClusterReport clusterReports={this.state.clusterReports} />
    );
  }
}

export { DeployCluster };
