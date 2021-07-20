import React from "react";

import { Story, Meta } from "@storybook/react";
import GlobalStyles from "assets/styles/globalStyles";
import { Navigation, NavigationProps } from "./navigation";

export default {
  component: Navigation,
  title: "organisms/Navigation",
} as Meta;

const Template: Story<NavigationProps> = (args) => (
  <>
    <GlobalStyles /> <Navigation {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {};
