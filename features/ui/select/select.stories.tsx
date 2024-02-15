import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select, SelectProps } from "./select";

export default {
  title: "UI/Select",
  component: Select,
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
