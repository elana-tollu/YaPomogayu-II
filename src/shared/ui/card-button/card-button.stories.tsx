import type { Meta, StoryObj } from "@storybook/react";

import { CardButton } from ".";
import { CompletedApplicationIcon } from "../icons/completed-application-icon";

const meta: Meta<typeof CardButton> = {
  title: "Buttons/CardButton",
  component: CardButton,
  tags: ["autodocs"],
  argTypes: {
    customIcon: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Icon = <CompletedApplicationIcon size="54" color="white" />;

export const Default: Story = {
  args: {
    label: "Обозначение карточки",
    customIcon: Icon,
  },
};

export const Pressed: Story = {
  args: {
    label: "Обозначение карточки",
    customIcon: Icon,
  },
};
