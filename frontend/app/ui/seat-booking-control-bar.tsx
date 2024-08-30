"use client";

import { DateInput, DateValue } from "@mantine/dates";
import { Button } from "@mantine/core";

export interface SeatBookingControlBarProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
  onSearch: () => Promise<void>;
}

export default function SeatBookingControlBar(
  props: SeatBookingControlBarProps,
) {
  const { startDate, setStartDate, endDate, setEndDate, onSearch } = props;

  const handleStartDateChange = (date: DateValue) => {
    setStartDate(date as Date);
  };

  const handleEndDateChange = (date: DateValue) => {
    setEndDate(date as Date);
  };

  return (
    <div>
      <div className="flex gap-5 items-end">
        <div className="w-1/3">
          <DateInput
            label="Start Time"
            placeholder="Pick start time"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="w-1/3">
          <DateInput
            label="End Time"
            placeholder="Pick end time"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>

        <Button onClick={() => onSearch()}>Search</Button>
      </div>
    </div>
  );
}
