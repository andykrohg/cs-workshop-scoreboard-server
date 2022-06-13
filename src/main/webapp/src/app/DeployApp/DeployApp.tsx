import * as React from 'react';
import AppReport from './AppReport';


class DeployApp extends React.Component {
  timerID;
  state = {appReports: []};

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
    fetch('/progress-reports?sort=app')
    .then(res => res.json())
    .then((data) => {
      this.setState({ appReports: data })
    }).catch(console.log)
  }

  render() {
    return (
      <AppReport appReports={this.state.appReports} />
    );
  }
}

export { DeployApp };