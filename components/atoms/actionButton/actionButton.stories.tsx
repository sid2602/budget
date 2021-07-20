import React from "react";

import { Story, Meta } from "@storybook/react";

import { ActionButton } from "./actionButton";
import GlobalStyles from "assets/styles/globalStyles";

export default {
  component: ActionButton,
  title: "atoms/actionButton",
} as Meta;

const Template: Story = (args) => (
  <>
    <GlobalStyles />
    <ActionButton {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {};
