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
      <Title headingLevel="h1" size="xl">{this.props.name}</Title><br />
      <Title headingLevel="h2" size="lg">Update your name: </Title>
      <CodeBlock>
      <CodeBlockCode id="code-content">
          export MY_NAME="YOUR NAME HERE"
        </CodeBlockCode><br/>
        <CodeBlockCode id="code-content">
          oc create cm my-name --from-literal=username=$(oc whoami) --from-literal=displayName="$MY_NAME"
        </CodeBlockCode>
        <CodeBlockCode id="code-content2">
          oc label cm/my-name workshop=scoreboard        
        </CodeBlockCode><br/>
      </CodeBlock>
      {this.state.module1Reports.map((moduleReport:any) =>
        <p>
          <Title headingLevel="h1" size="lg">{moduleReport.displayName ? moduleReport.displayName : moduleReport.attendeeName}</Title>
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
