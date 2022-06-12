import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep } from '@patternfly/react-core';

const DeployClusterReport = ({ clusterReports }) => {
  return (
    <PageSection>
      <Title headingLevel="h1" size="xl">Getting started with ROSA</Title><br />
      {clusterReports.map((clusterReport) =>
        <p>
          <Title headingLevel="h1" size="lg">{clusterReport.attendeeName}</Title>
          <ProgressStepper>
            <ProgressStep
              variant={clusterReport.statuses[0]}
              id="basic-with-issue-step1"
              titleId="basic-with-issue-step1-title"
              aria-label="completed step, step with success"
            >
              Deploy cluster
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.statuses[1]}
              id="basic-with-issue-step2"
              titleId="basic-with-issue-step2-title"
              aria-label="completed step, step with success"
            >
              Create an admin user
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.statuses[2]}
              id="basic-with-issue-step3"
              titleId="basic-with-issue-step3-title"
              aria-label="completed step, step with warning"
            >
              Setup IdP
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.statuses[3]}
              id="basic-with-issue-step4"
              titleId="basic-with-issue-step4-title"
              aria-label="step with info"
            >
              Configure Worker Nodes
            </ProgressStep>
            <ProgressStep
              variant={clusterReport.statuses[4]}
              id="basic-with-issue-step5"
              titleId="basic-with-issue-step5-title"
              aria-label="pending step"
            >
              Create a Support Ticket
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
