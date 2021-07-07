import React from "react";

import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./button";

export default {
  component: Button,
  title: "Components/Atoms/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Default = Template.bind({});
export const Loading = Template.bind({});
export const Small = Template.bind({});
export const FullWidth = Template.bind({});

Primary.args = {
  primary: true,
  children: "Primary Button",
  small: false,
  fullWidth: false,
  isLoading: false,
};

Default.args = {
  primary: false,
  children: "Default Button",
  small: false,
  fullWidth: false,
  isLoading: false,
};

Loading.args = {
  primary: true,
  children: "Primary Button",
  small: false,
  fullWidth: false,
  isLoading: true,
};

Small.args = {
  primary: true,
  children: "Small button",
  isLoading: false,
  small: true,
  fullWidth: false,
};

FullWidth.args = {
  primary: true,
  children: "Full width button",
  isLoading: false,
  small: false,
  fullWidth: true,
};
