import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "assets/styles/globalStyles";
import { InfoPrev, InfoPrevProps } from "./infoPrev";
import { GiTakeMyMoney } from "react-icons/gi";
export default {
  component: InfoPrev,
  title: "molecules/infoPrev",
} as Meta;

const Template: Story<InfoPrevProps> = (args) => (
  <>
    <GlobalStyles /> <InfoPrev {...args} />
  </>
);

export const Default = Template.bind({});
export const Extended = Template.bind({});

Default.args = {
  Icon: GiTakeMyMoney,
  title: "Przychód",
  score: 3000,
  percent: 20,
  progress: true,
  marked: true,
};

Extended.args = {
  Icon: GiTakeMyMoney,
  title: "Przychód",
  score: 3000,
  percent: 20,
  progress: true,
  marked: true,
  extended: true,
  lastScore: 400,
};
