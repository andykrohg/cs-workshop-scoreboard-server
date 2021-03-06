import React, { ComponentProps } from 'react';
import { DeployCluster } from '@app/DeployCluster/DeployCluster';
import { Story } from '@storybook/react';

//๐ This default export determines where your story goes in the story list
export default {
  title: 'Components/DeployCluster',
  component: DeployCluster,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof DeployCluster>> = (args) => <DeployCluster {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*๐ The args you need here will depend on your component */
};
