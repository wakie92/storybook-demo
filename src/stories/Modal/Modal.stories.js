import React from "react";
import Modal from "./Modal";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "components|basic/Modal",
  component: Modal,
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
};

export const modal = () => {
  const title = text("title", "Payment Success");
  const description = text("description", "The payment was successful.");
  const visible = boolean("visible", true);
  const confirmText = text("confirmText", "Confirm");
  const cancelText = text("cancelText", "Calcel");
  const cancellable = boolean("cancellable", false);

  return (
    <Modal
      title={title}
      description={description}
      visible={visible}
      confirmText={confirmText}
      cancelText={cancelText}
      cancellable={cancellable}
    />
  );
};

modal.story = {
  name: "Default",
};

export const cancellable = () => {
  return (
    <Modal
      title="Delete Post"
      description="Are you sure you want to delete the post?"
      visible={true}
      confirmText="Delete"
      cancellable
    />
  );
};

export const customContent = () => {
  return (
    <Modal visible={true} hideButtons>
      Custom Content
    </Modal>
  );
};
