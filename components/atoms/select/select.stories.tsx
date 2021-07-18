import React from "react";
import { Select, SelectProps } from "./select";
import GlobalStyles from "assets/styles/globalStyles";
import { Story, Meta } from "@storybook/react";
export default {
  component: Select,
  title: "atoms/select",
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <>
    <GlobalStyles />
    <Select {...args} />
  </>
);

export const Default = Template.bind({});
export const ChangedWidth = Template.bind({});

const defData = [
  { value: 1, label: "something1" },
  { value: 2, label: "something2" },
  { value: 3, label: "something3" },
  { value: 4, label: "something4" },
  { value: 5, label: "something5" },
  { value: 6, label: "something6" },
  { value: 7, label: "something7" },
  { value: 8, label: "something8" },
  { value: 9, label: "something9" },
];

Default.args = {
  data: defData,
};
