"use client";

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

  return (
    <button
      key={id}
      className={`${getClassNames()} block border border-gray-500 z-999 text-[5px] font-bold text-emerald-700 transition-all`}
      style={{
        width,
        height,
      }}
    >
      {seatNumber}
    </button>
  );
}
