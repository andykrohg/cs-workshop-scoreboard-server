import * as React from 'react';
import { PageSection, Title, ProgressStepper, ProgressStep } from '@patternfly/react-core';

const userProgressMap = {
  "andy": ["info", "pending", "pending", "pending", "pending"],
  "krain": ["pending", "pending", "pending", "pending", "pending"],
  "john": ["pending", "pending", "pending", "pending", "pending"]
}

const DeployApp: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="xl">Deploy the application</Title><br/>
    {Object.keys(userProgressMap).map((user) => 
      <p>
        <Title headingLevel="h1" size="lg">{user}</Title>
        <ProgressStepper>
    <ProgressStep
      variant={userProgressMap[user][0]}
      id="basic-with-issue-step1"
      titleId="basic-with-issue-step1-title"
      aria-label="completed step, step with success"
    >
      Deploy app
    </ProgressStep>
    <ProgressStep
      variant={userProgressMap[user][1]}
      id="basic-with-issue-step2"
      titleId="basic-with-issue-step2-title"
      aria-label="completed step, step with success"
    >
      Configure health check
    </ProgressStep>
    <ProgressStep
      variant={userProgressMap[user][2]}
      id="basic-with-issue-step3"
      titleId="basic-with-issue-step3-title"
      aria-label="completed step, step with warning"
    >
      Create a file
    </ProgressStep>
    <ProgressStep
      variant={userProgressMap[user][3]}
      id="basic-with-issue-step4"
      titleId="basic-with-issue-step4-title"
      aria-label="step with info"
    >
      Kill the pod
    </ProgressStep>
    <ProgressStep
      variant={userProgressMap[user][4]}
      id="basic-with-issue-step5"
      titleId="basic-with-issue-step5-title"
      aria-label="pending step"
    >
      Scale up the microservice
    </ProgressStep>
  </ProgressStepper>
  <br/>
      </p>
    )}
    <br/>
  </PageSection>
  
)

export { DeployApp };
