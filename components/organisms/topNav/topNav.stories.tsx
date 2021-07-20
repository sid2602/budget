import React from "react";

import { Story, Meta } from "@storybook/react";
import GlobalStyles from "assets/styles/globalStyles";
import { TopNav, TopNavProps } from "./topNav";

export default {
  component: TopNav,
  title: "organisms/TopNav",
} as Meta;

const Template: Story<TopNavProps> = (args) => (
  <>
    <GlobalStyles />
    <TopNav {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  title: "Strona główna",
};
