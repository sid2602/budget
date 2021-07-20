import React from "react";

import { Story, Meta } from "@storybook/react";

import { CustomComponent } from "./CustomComponent";
import GlobalStyles from "assets/styles/globalStyles";

export default {
  component: CustomComponent,
  title: "atoms/CustomComponent",
} as Meta;

const Template: Story = (args) => (
  <>
    <GlobalStyles />
    <CustomComponent {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {};
