"use client";

export interface SeatProps {
  id: string;
  seatNumber: number;
  width: number;
  height: number;
}

// emerald-700 primary-color

export default function Seat(props: SeatProps) {
  const { id, seatNumber, width, height } = props;
  return (
    <button
      key={id}
      className="block bg-gray-300 border border-gray-700 z-999 cursor-pointer text-[5px] font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white transition-all"
      style={{
        width,
        height,
      }}
    >
      {seatNumber}
    </button>
  );
}
