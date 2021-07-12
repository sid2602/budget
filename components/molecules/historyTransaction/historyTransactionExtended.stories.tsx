import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import {
  HistoryTransactionExtended,
  HistoryTransactionExtendedProps,
} from "./historyTransactionExtended";
import styled from "styled-components";

export default {
  component: HistoryTransactionExtended,
  title: "molecules/history transaction extended",
} as Meta;

const HistoryTransactionContainer = styled.div`
  width: 920px;
  border: 1px solid black;
`;

const Template: Story<HistoryTransactionExtendedProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer>
      <HistoryTransactionExtended {...args} />
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});
export const Editable = Template.bind({});
Default.args = {
  Icon: MdKitchen,
  expectedPrice: 3000,
  actualPrice: 2500,
  category: "Jedzenie dom",
  comment: "some comment",
};

Editable.args = {
  Icon: MdKitchen,
  expectedPrice: 3000,
  actualPrice: 2500,
  category: "Jedzenie dom",
  comment: "some comment",
  extended: true,
};
