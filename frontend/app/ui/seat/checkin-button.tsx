"use client";

import { Button, Modal, Group, Grid, Space, Text, Center } from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

export default function CheckinButton({ seatId }: { seatId: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button onClick={open}>Check-in</Button>
      <Modal opened={opened} onClose={close} title={`Seat ${seatId}`}>
        <Text>Check-in successfully</Text>
        <Space h="md" />
        <Group justify="flex-end">
          <Button onClick={close}>Ok</Button>
        </Group>
      </Modal>
    </>
  );
}
