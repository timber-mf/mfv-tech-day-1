"use client";

import { Button, Modal, Group, Grid, Space } from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import SeatBookingForm from "@/app/ui/seat/booking-form";

export default function BookingButton ({ seatId}: {
  seatId: string
}) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Button onClick={open}>Book</Button>
      <Modal opened={opened} onClose={close} title={`Seat ${seatId}`}>
        <SeatBookingForm />
      </Modal>
    </>
  )
}