import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Button,
  ButtonColor,
  ButtonProps,
  ButtonSize,
  IconPosition,
} from "./button";
import { IconTest } from "./icon";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => (
  <div style={{ padding: 50 }}>
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  color: ButtonColor.primary,
  size: ButtonSize.small,
};
Default.parameters = {
  viewMode: "docs",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Default Button",
  icon: <IconTest />,
  iconPosition: IconPosition.leading,
  color: ButtonColor.primary,
  size: ButtonSize.small,
};
WithIcon.parameters = {
  viewMode: "docs",
};
