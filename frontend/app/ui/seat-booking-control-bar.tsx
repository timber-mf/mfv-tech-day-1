"use client";

import { DateTimePicker } from "@mantine/dates";

export interface SeatBookingControlBarProps {}

export default function SeatBookingControlBar(
  _props: SeatBookingControlBarProps,
) {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-1/3">
          <DateTimePicker label="Start Time" placeholder="Pick start time" />
        </div>

        <div className="w-1/3">
          <DateTimePicker label="End Time" placeholder="Pick end time" />
        </div>
      </div>
    </div>
  );
}
