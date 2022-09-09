import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep, CodeBlock, CodeBlockCode } from '@patternfly/react-core';


class Module extends React.Component<{id:string, name:string, tasks:string[]}> {
  timerID;
  state = {module1Reports: []};

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
    fetch('/progress-reports?module=' + this.props.id)
    .then(res => res.json())
    .then((data) => {
      this.setState({ module1Reports: data })
    }).catch(console.log)
  }

  render() {
    return (
      <PageSection>
      <Title headingLevel="h1" size="xl">Get the client here: <a href="https://red.ht/aro-workshop-scoreboard-client" target="_blank">https://red.ht/aro-workshop-scoreboard-client</a></Title>
      <CodeBlock>
        <CodeBlockCode id="code-content">SCOREBOARD_SERVER={window.location.href.replace(/\/$/i, "")}</CodeBlockCode><br/>
      </CodeBlock>
      <Title headingLevel="h1" size="xl">{this.props.name}</Title><br />
      {this.state.module1Reports.map((moduleReport:any) =>
        <p>
          <Title headingLevel="h1" size="lg">{moduleReport.attendeeName}</Title>
          <ProgressStepper>
            {this.props.tasks.map((task:any, i) =>
            <ProgressStep variant={moduleReport.workshopTasks[i].status}>
              {this.props.tasks[i]}
            </ProgressStep>
            )}
          </ProgressStepper>
          <br />
        </p>
      )}
      <br />
    </PageSection>
    );
  }
}

export { Module };
