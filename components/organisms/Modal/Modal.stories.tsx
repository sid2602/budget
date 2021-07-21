import React from "react";

import { Story, Meta } from "@storybook/react";

import { Modal, ModalProps } from "./Modal";
import GlobalStyles from "assets/styles/globalStyles";
import { AddValueModal } from "./AddValueModal";
import { DeleteValueModal } from "./DeleteValueModal";
export default {
  component: Modal,
  title: "organisms/Modal",
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <>
    <GlobalStyles />
    <Modal {...args} />
  </>
);

export const Default = Template.bind({});
export const Delete = Template.bind({});

Default.args = {
  component: AddValueModal,
};

Delete.args = {
  component: DeleteValueModal,
};
