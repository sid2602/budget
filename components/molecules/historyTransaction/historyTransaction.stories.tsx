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

type HistoryTransactionContainerProps = {
  editable?: boolean;
};

const HistoryTransactionContainer = styled.div<HistoryTransactionContainerProps>`
  width: ${({ editable }) => (editable ? "870px" : "735px")};
  border: 1px solid black;
`;

const Template: Story<HistoryTransactionProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer editable={args.editable}>
      <HistoryTransaction {...args} />
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});
export const Editable = Template.bind({});

Default.args = {
  Icon: MdKitchen,
  category: "Jedzenie dom",
  date: new Date("2021-10-10"),
  action: -50,
  comment: "some comment",
};

Editable.args = {
  Icon: MdKitchen,
  category: "Jedzenie dom",
  date: new Date("2021-10-10"),
  action: -50,
  comment: "some comment",
  editable: true,
};
