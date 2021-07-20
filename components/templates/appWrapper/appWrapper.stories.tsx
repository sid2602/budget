import React from "react";

import { Story, Meta } from "@storybook/react";

import { AppWrapper, AppWrapperProps } from "./appWrapper";
import GlobalStyles from "assets/styles/globalStyles";

export default {
  component: AppWrapper,
  title: "templates/AppWrapper",
} as Meta;

const Template: Story<AppWrapperProps> = (args) => (
  <>
    <GlobalStyles />
    <AppWrapper {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  title: "Strona główna",
};
