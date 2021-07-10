import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import {
  HistoryTransaction,
  HistoryTransactionProps,
} from "./historyTransaction";
import styled from "styled-components";

export default {
  component: HistoryTransaction,
  title: "molecules/history transaction",
} as Meta;

const HistoryTransactionContainer = styled.div`
  width: 735px;
  border: 1px solid black;
`;

const Template: Story<HistoryTransactionProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer>
      <HistoryTransaction {...args} />
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});

Default.args = {
  Icon: MdKitchen,
  category: "Jedzenie dom",
  date: new Date("2021-10-10"),
  action: -50,
  comment: "some comment",
};
