// Checkbox.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps, CheckboxSize } from "./checkbox"; // Adjust the import path based on your project structure

export default {
  title: "UI/Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.small,
  label: "Label",
  indeterminate: false,
  disabled: false,
};
