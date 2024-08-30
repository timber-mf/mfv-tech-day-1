"use client";

import { Todo } from "@/app/lib/todo";
import { Grid, Space, Group, Button, Alert } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IconInfoCircle } from "@tabler/icons-react";

type FormBooking = {
  bookingDate: Date;
  fromTime: string;
  toTime: string;
};

export default function SeatBookingForm({
  seatId,
  onSuccess,
}: {
  seatId: string;
  onSuccess: () => void;
}) {
  const { control, handleSubmit, reset } = useForm<FormBooking>({
    defaultValues: {
      bookingDate: new Date(),
      fromTime: "09:00",
      toTime: "18:00",
    },
  });
  const service = Todo.useService();
  const [err, setErr] = React.useState<string | null>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const parseTime = (t: string) => {
      const startTime = new Date(data.bookingDate.getTime());
      startTime.setHours(+t.split(":")[0]);
      startTime.setMinutes(+t.split(":")[1]);
      return startTime;
    };

    const fromTime = parseTime(data.fromTime);
    const toTime = parseTime(data.toTime);
    service
      .postAuth("https://api.paat.party/api/bookings/book", {
        seatId: +seatId,
        userId: service.user?.userId || 1,
        startTime: formatDate(fromTime),
        endTime: formatDate(toTime),
      })
      .then((data) => {
        if (data.res.ok) {
          onSuccess();
        } else {
          setErr(data.json.message);
        }
      });
  });
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Controller
            control={control}
            name="bookingDate"
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
                value={field.value}
                onChange={(ev) => field.onChange(ev.target.value)}
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
                value={field.value}
                onChange={(ev) => field.onChange(ev.target.value)}
              />
            )}
          />
        </Grid.Col>
      </Grid>
      <Space h="md" />
      {err ? (
        <Alert
          variant="light"
          color="red"
          title="Not success"
          icon={<IconInfoCircle />}
        >
          {err}
        </Alert>
      ) : null}
      <Group justify="flex-end">
        <Button onClick={onSubmit}>Save</Button>
      </Group>
    </>
  );
}

function formatDate(date: Date): string {
  return date.toISOString().split(".")[0];
}
