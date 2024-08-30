"use client";

import { Button, Modal, Group, Grid, Space, Text, Center } from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Todo } from "@/app/lib/todo";

export default function CheckinButton({ seatId }: { seatId: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const service = Todo.useService();

  const handleCheckin = async () => {
    try {
      const res = await fetch(
        `https://api.paat.party/api/seats/checkin?seatId=${seatId}&userId=1`,
        {
          headers: {
            Authorization: `Bearer ${service?.user?.token}`,
          },
        },
      );

      if (res.ok) {
        const data = await res.text();
        if (data) {
          open();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={handleCheckin}>Check-in</Button>
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
