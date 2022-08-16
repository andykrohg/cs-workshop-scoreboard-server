import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep } from '@patternfly/react-core';

const DeployClusterReport = ({ clusterReports }) => {
  return (
    <PageSection>
      <Title headingLevel="h1" size="xl">Join now: <a href="https://red.ht/cs-workshop-scoreboard" target="_blank">https://red.ht/cs-workshop-scoreboard</a></Title>
      <Title headingLevel="h1" size="xl">SERVER_URL={window.location.href.replace(/\/$/i, "")}</Title><br />
      <Title headingLevel="h1" size="xl">Getting started with ROSA</Title><br />
      {clusterReports.map((clusterReport) =>
        <p>
          <Title headingLevel="h1" size="lg">{clusterReport.attendeeName}</Title>
          <ProgressStepper>
            <ProgressStep
              variant={clusterReport.clusterTasks[0]}
              id="basic-with-issue-step1"
              titleId="basic-with-issue-step1-title"
              aria-label="completed step, step with success"
            >
              Cluster ready
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.clusterTasks[1]}
              id="basic-with-issue-step2"
              titleId="basic-with-issue-step2-title"
              aria-label="completed step, step with success"
            >
              Configure IDP
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.clusterTasks[2]}
              id="basic-with-issue-step3"
              titleId="basic-with-issue-step3-title"
              aria-label="completed step, step with warning"
            >
              Create a User
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.clusterTasks[3]}
              id="basic-with-issue-step4"
              titleId="basic-with-issue-step4-title"
              aria-label="step with info"
            >
              Create a MachinePool
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.clusterTasks[4]}
              id="basic-with-issue-step5"
              titleId="basic-with-issue-step5-title"
              aria-label="pending step"
            >
              Add node labels
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.clusterTasks[5]}
              id="basic-with-issue-step6"
              titleId="basic-with-issue-step6-title"
              aria-label="pending step"
            >
              Setup Autoscaling
            </ProgressStep>
          </ProgressStepper>
          <br />
        </p>
      )}
      <br />
    </PageSection>


  );
}

export default DeployClusterReport ;
