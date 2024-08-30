"use client";

import { Grid, Space, Group, Button } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type FormBooking = {
  bookingDate: Date;
  fromTime: string;
  toTime: string;
};

export default function SeatBookingForm({ onSuccess }: {
  onSuccess: () => void;
}) {
  const { control, handleSubmit, reset } = useForm<FormBooking>();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    onSuccess();
  })
  return <>
    <Grid>
      <Grid.Col span={12}>
        <Controller
          control={control}
          name="bookingDate"
          defaultValue={new Date()}
          render={({ field }) => (
            <DateInput
              label="Booking date"
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Controller
          control={control}
          name="fromTime"
          render={({ field }) => (
            <TimeInput
              label="From time"
              defaultValue="09:00"
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <Controller
          control={control}
          name="toTime"
          render={({ field }) => (
            <TimeInput
              label="To time"
              defaultValue="18:00"
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </Grid.Col>
    </Grid>
    <Space h="md" />
    <Group justify="flex-end">
      <Button onClick={onSubmit}>Save</Button>
    </Group>
  </>
}
