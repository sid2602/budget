import React from "react";

import { Story, Meta } from "@storybook/react";

import { TextArea, TextAreaProps } from "./TextArea";
import GlobalStyles from "assets/styles/globalStyles";

export default {
  component: TextArea,
  title: "atoms/TextArea",
} as Meta;

const Template: Story<TextAreaProps> = (args) => (
  <>
    <GlobalStyles />
    <TextArea {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  rows: 5,
  cols: 5,
  children: "",
  placeholder: "Placeholder here...",
};
