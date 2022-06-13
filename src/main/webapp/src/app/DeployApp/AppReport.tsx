import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep } from '@patternfly/react-core';

const DeployAppReport = ({ appReports }) => {
  return (
    <PageSection>
      <Title headingLevel="h1" size="xl">Getting started with ROSA</Title><br />
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
              Cluster ready
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[1]}
              id="basic-with-issue-step2"
              titleId="basic-with-issue-step2-title"
              aria-label="completed step, step with success"
            >
              Configure IDP
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[2]}
              id="basic-with-issue-step3"
              titleId="basic-with-issue-step3-title"
              aria-label="completed step, step with warning"
            >
              Create a User
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[3]}
              id="basic-with-issue-step4"
              titleId="basic-with-issue-step4-title"
              aria-label="step with info"
            >
              Create a MachinePool
            </ProgressStep>
            <ProgressStep
              variant={appReport.appTasks[4]}
              id="basic-with-issue-step5"
              titleId="basic-with-issue-step5-title"
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

export default DeployAppReport ;
