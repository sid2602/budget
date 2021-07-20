import React from "react";

import { Story, Meta } from "@storybook/react";
import GlobalStyles from "assets/styles/globalStyles";
import { Input, InputProps } from "./input";

export default {
  component: Input,
  title: "atoms/Input",
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <GlobalStyles /> <Input {...args} />
  </>
);

export const Default = Template.bind({});
export const Touched = Template.bind({});
export const Error = Template.bind({});

Default.args = {
  placeholder: "Normal input",
};

Touched.args = {
  placeholder: "Touched input",
  value: "Some text",
};

Error.args = {
  placeholder: "Error input",
  value: "Some text",
  error: "error",
};
