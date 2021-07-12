import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "../../../assets/styles/globalStyles";
import {
  HistoryTransaction,
  HistoryTransactionProps,
} from "../../molecules/historyTransaction/historyTransaction";
import { HistoryTransactionContainer } from "./historyTransactionContainer";

export default {
  component: HistoryTransactionContainer,
  title: "organisms/history Transaction Container",
} as Meta;

const Template: Story<HistoryTransactionProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer {...args}>
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-10")}
        action={-50}
        comment="Comment"
        editable={args.editable}
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-9")}
        action={-40}
        comment="Comment"
        editable={args.editable}
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-8")}
        action={-25}
        comment="Comment"
        editable={args.editable}
      />
      <HistoryTransaction
        Icon={MdKitchen}
        category="Jedzenie dom"
        date={new Date("2021-10-7")}
        action={-10}
        comment="Comment"
        editable={args.editable}
      />
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});
export const Editable = Template.bind({});
Default.args = {};

Editable.args = {
  editable: true,
};
