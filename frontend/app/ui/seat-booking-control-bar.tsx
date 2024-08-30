"use client";

import { DateTimePicker } from "@mantine/dates";
import { Button } from "@mantine/core";

export interface SeatBookingControlBarProps {}

export default function SeatBookingControlBar(
  _props: SeatBookingControlBarProps,
) {
  return (
    <div>
      <div className="flex gap-5 items-end">
        <div className="w-1/3">
          <DateTimePicker label="Start Time" placeholder="Pick start time" />
        </div>

        <div className="w-1/3">
          <DateTimePicker label="End Time" placeholder="Pick end time" />
        </div>

        <Button>Search</Button>
      </div>
    </div>
  );
}
