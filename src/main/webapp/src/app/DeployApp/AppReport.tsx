import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep } from '@patternfly/react-core';

const DeployAppReport = ({ appReports }) => {
  return (
    <PageSection>
      <Title headingLevel="h1" size="xl">Join now: <a href="https://red.ht/cs-workshop-scoreboard" target="_blank">https://red.ht/cs-workshop-scoreboard</a></Title><br />
      <Title headingLevel="h1" size="xl">Deploy the application</Title><br />
      {appReports.map((appReport) =>
        <p>
          <Title headingLevel="h1" size="lg">{appReport.attendeeName}</Title>
          <ProgressStepper>
            <ProgressStep
              variant={appReport.appTasks[0]}
              id="basic-with-issue-step1"
              titleId="basic-with-issue-step1-title"
              aria-label="completed step, step with success"
            >
              Deploy backend service
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[1]}
              id="basic-with-issue-step2"
              titleId="basic-with-issue-step2-title"
              aria-label="completed step, step with warning"
            >
              Deploy frontend service
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[2]}
              id="basic-with-issue-step3"
              titleId="basic-with-issue-step3-title"
              aria-label="step with info"
            >
              Make the app malfunction
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[3]}
              id="basic-with-issue-step4"
              titleId="basic-with-issue-step4-title"
              aria-label="pending step"
            >
              Create a file using the app
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[4]}
              id="basic-with-issue-step5"
              titleId="basic-with-issue-step5-title"
              aria-label="pending step"
            >
              Create a Horizontal Pod Autoscaler
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[5]}
              id="basic-with-issue-step6"
              titleId="basic-with-issue-step6-title"
              aria-label="pending step"
            >
              Install the Cluster Logging Addon Service
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[6]}
              id="basic-with-issue-step7"
              titleId="basic-with-issue-step7-title"
              aria-label="pending step"
            >
              Create an s2i deployment
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[7]}
              id="basic-with-issue-step8"
              titleId="basic-with-issue-step8-title"
              aria-label="pending step"
            >
              Setup a webhook
            </ProgressStep>
          </ProgressStepper>
          <br />
        </p>
      )}
      <br />
    </PageSection>


  );
}

export default DeployAppReport ;
