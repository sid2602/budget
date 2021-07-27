import React from "react";
import { MdKitchen } from "react-icons/md";
import { Story, Meta } from "@storybook/react";
import GlobalStyles from "assets/styles/globalStyles";
import {
  HistoryTransaction,
  HistoryTransactionProps,
} from "components/molecules/historyTransaction/historyTransaction";
import { HistoryTransactionContainer } from "./historyTransactionContainer";
import { history } from "assets/mockedData/history";
export default {
  component: HistoryTransactionContainer,
  title: "organisms/history Transaction Container",
} as Meta;

const Template: Story<HistoryTransactionProps> = (args) => (
  <>
    <GlobalStyles />{" "}
    <HistoryTransactionContainer {...args}>
      {history.map(({ id, Icon, category, date, action, comment }) => (
        <HistoryTransaction
          key={id}
          Icon={Icon}
          category={category}
          date={date}
          action={action}
          comment={comment}
          editable={true}
        />
      ))}
    </HistoryTransactionContainer>
  </>
);

export const Default = Template.bind({});
export const Editable = Template.bind({});
Default.args = {};

Editable.args = {
  editable: true,
};
