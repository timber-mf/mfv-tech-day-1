"use client";

import { useRouter } from "next/navigation";
import * as sea from "node:sea";

export type SeatStatus = "AVAILABLE" | "BOOKED" | "NOT_INITIALIZED";

export interface SeatProps {
  id: string;
  seatNumber: number;
  width: number;
  height: number;
  status: SeatStatus;
}

// emerald-700 primary-color

export default function Seat(props: SeatProps) {
  const { id, seatNumber, width, height, status = "NOT_INITIALIZED" } = props;
  const router = useRouter();

  const getClassNames = () => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-400 text-white cursor-pointer hover:bg-green-600";
      case "BOOKED":
        return "bg-red-400 text-white cursor-pointer hover:bg-red-600";
      case "NOT_INITIALIZED":
        return "bg-gray-300 cursor-default";
      default:
        return "";
    }
  };

  const handleClick = () => {
    if (status === "NOT_INITIALIZED") return;
    router.push(`/seat/${seatNumber}`);
  };

  return (
    <button
      key={id}
      className={`${getClassNames()} block border border-gray-500 z-999 text-[5px] font-bold text-emerald-700 transition-all`}
      style={{
        width,
        height,
      }}
      onClick={handleClick}
    >
      {seatNumber}
    </button>
  );
}
