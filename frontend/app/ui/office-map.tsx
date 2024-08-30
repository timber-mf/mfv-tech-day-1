"use client";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

import Seat from "@/app/ui/seat";
import SeatBookingControlBar from "@/app/ui/seat-booking-control-bar";
import { Button } from "@mantine/core";

const DESKS = [
  // row 1
  {
    id: "row-1",
    rotate: "0deg",
    x: 802,
    y: 533,
    seats: [
      { number: 2, width: 21, height: 12 },
      { number: 1, width: 21, height: 12 },
    ],
  },

  // row 2
  {
    id: "row-2",
    rotate: "0deg",
    x: 734,
    y: 533,
    seats: [
      { number: 4, width: 21, height: 12 },
      { number: 3, width: 21, height: 12 },
    ],
  },

  // row 3
  {
    id: "row-3",
    rotate: "0deg",
    x: 667,
    y: 533,
    seats: [
      { number: 6, width: 21, height: 12 },
      { number: 5, width: 21, height: 12 },
    ],
  },

  // row 4
  {
    id: "row-4",
    rotate: "0deg",
    x: 599,
    y: 533,
    seats: [
      { number: 9, width: 21, height: 12 },
      { number: 8, width: 21, height: 12 },
      { number: 7, width: 21, height: 12 },
    ],
  },

  // row 5
  {
    id: "row-5",
    rotate: "0deg",
    x: 531,
    y: 533,
    seats: [
      { number: 11, width: 21, height: 12 },
      { number: 10, width: 21, height: 12 },
    ],
  },

  // row 6
  {
    id: "row-6",
    rotate: "0deg",
    x: 802,
    y: 545,
    seats: [
      { number: 13, width: 21, height: 12 },
      { number: 12, width: 21, height: 12 },
    ],
  },

  // row 7
  {
    id: "row-7",
    rotate: "0deg",
    x: 734,
    y: 545,
    seats: [
      { number: 15, width: 21, height: 12 },
      { number: 14, width: 21, height: 12 },
    ],
  },

  // row 8
  {
    id: "row-8",
    rotate: "0deg",
    x: 667,
    y: 545,
    seats: [
      { number: 17, width: 21, height: 12 },
      { number: 16, width: 21, height: 12 },
    ],
  },

  // row 9
  {
    id: "row-9",
    rotate: "0deg",
    x: 599,
    y: 545,
    seats: [
      { number: 20, width: 21, height: 12 },
      { number: 19, width: 21, height: 12 },
      { number: 18, width: 21, height: 12 },
    ],
  },

  // row 10
  {
    id: "row-10",
    rotate: "0deg",
    x: 531,
    y: 545,
    seats: [
      { number: 22, width: 21, height: 12 },
      { number: 21, width: 21, height: 12 },
    ],
  },

  // row 11
  {
    id: "row-11",
    rotate: "0deg",
    x: 802,
    y: 594,
    seats: [
      { number: 24, width: 21, height: 12 },
      { number: 23, width: 21, height: 12 },
    ],
  },

  // row 12
  {
    id: "row-12",
    rotate: "0deg",
    x: 734,
    y: 594,
    seats: [
      { number: 26, width: 21, height: 12 },
      { number: 25, width: 21, height: 12 },
    ],
  },

  // row 13
  {
    id: "row-13",
    rotate: "0deg",
    x: 667,
    y: 594,
    seats: [
      { number: 28, width: 21, height: 12 },
      { number: 27, width: 21, height: 12 },
    ],
  },

  // row 14
  {
    id: "row-14",
    rotate: "0deg",
    x: 599,
    y: 594,
    seats: [
      { number: 30, width: 21, height: 12 },
      { number: 29, width: 21, height: 12 },
    ],
  },

  // row 15
  {
    id: "row-15",
    rotate: "0deg",
    x: 531,
    y: 594,
    seats: [
      { number: 32, width: 21, height: 12 },
      { number: 31, width: 21, height: 12 },
    ],
  },

  // row 16
  {
    id: "row-16",
    rotate: "0deg",
    x: 802,
    y: 606,
    seats: [
      { number: 34, width: 21, height: 12 },
      { number: 33, width: 21, height: 12 },
    ],
  },

  // row 17
  {
    id: "row-17",
    rotate: "0deg",
    x: 734,
    y: 606,
    seats: [
      { number: 36, width: 21, height: 12 },
      { number: 35, width: 21, height: 12 },
    ],
  },

  // row 18
  {
    id: "row-18",
    rotate: "0deg",
    x: 667,
    y: 606,
    seats: [
      { number: 38, width: 21, height: 12 },
      { number: 37, width: 21, height: 12 },
    ],
  },

  // row 19
  {
    id: "row-19",
    rotate: "0deg",
    x: 599,
    y: 606,
    seats: [
      { number: 40, width: 21, height: 12 },
      { number: 39, width: 21, height: 12 },
    ],
  },

  // row 20
  {
    id: "row-20",
    rotate: "0deg",
    x: 531,
    y: 606,
    seats: [
      { number: 42, width: 21, height: 12 },
      { number: 41, width: 21, height: 12 },
    ],
  },

  // row 21
  {
    id: "row-21",
    rotate: "-45deg",
    x: 187,
    y: 584,
    seats: [
      { number: 46, width: 20, height: 12 },
      { number: 45, width: 20, height: 12 },
      { number: 44, width: 20, height: 12 },
      { number: 43, width: 20, height: 12 },
    ],
  },

  // row 22
  {
    id: "row-22",
    rotate: "-45deg",
    x: 179,
    y: 576,
    seats: [
      { number: 50, width: 20, height: 12 },
      { number: 49, width: 20, height: 12 },
      { number: 48, width: 20, height: 12 },
      { number: 47, width: 20, height: 12 },
    ],
  },

  // row 23
  {
    id: "row-23",
    rotate: "-45deg",
    x: 187,
    y: 515,
    seats: [
      { number: 54, width: 20, height: 12 },
      { number: 53, width: 20, height: 12 },
      { number: 52, width: 20, height: 12 },
      { number: 51, width: 20, height: 12 },
    ],
  },

  // row 24
  {
    id: "row-24",
    rotate: "-45deg",
    x: 179,
    y: 507,
    seats: [
      { number: 58, width: 20, height: 12 },
      { number: 57, width: 20, height: 12 },
      { number: 56, width: 20, height: 12 },
      { number: 55, width: 20, height: 12 },
    ],
  },

  // row-25
  {
    id: "row-25",
    rotate: "-45deg",
    x: 187,
    y: 447,
    seats: [
      { number: 62, width: 20, height: 12 },
      { number: 61, width: 20, height: 12 },
      { number: 60, width: 20, height: 12 },
      { number: 59, width: 20, height: 12 },
    ],
  },

  // row-26
  {
    id: "row-26",
    rotate: "-45deg",
    x: 179,
    y: 439,
    seats: [
      { number: 66, width: 20, height: 12 },
      { number: 65, width: 20, height: 12 },
      { number: 64, width: 20, height: 12 },
      { number: 63, width: 20, height: 12 },
    ],
  },

  // row-27
  {
    id: "row-27",
    rotate: "45deg",
    x: 110,
    y: 550,
    seats: [
      { number: 67, width: 20, height: 12 },
      { number: 68, width: 20, height: 12 },
      { number: 69, width: 20, height: 12 },
      { number: 70, width: 20, height: 12 },
    ],
  },

  // row-28
  {
    id: "row-28",
    rotate: "45deg",
    x: 118,
    y: 542,
    seats: [
      { number: 71, width: 20, height: 12 },
      { number: 72, width: 20, height: 12 },
      { number: 73, width: 20, height: 12 },
      { number: 74, width: 20, height: 12 },
    ],
  },

  // row-29
  {
    id: "row-29",
    rotate: "45deg",
    x: 110,
    y: 481,
    seats: [
      { number: 75, width: 20, height: 12 },
      { number: 76, width: 20, height: 12 },
      { number: 77, width: 20, height: 12 },
      { number: 78, width: 20, height: 12 },
    ],
  },

  // row-30
  {
    id: "row-30",
    rotate: "45deg",
    x: 118,
    y: 473,
    seats: [
      { number: 79, width: 20, height: 12 },
      { number: 80, width: 20, height: 12 },
      { number: 81, width: 20, height: 12 },
      { number: 82, width: 20, height: 12 },
    ],
  },

  // row-31
  {
    id: "row-31",
    rotate: "45deg",
    x: 110,
    y: 412,
    seats: [
      { number: 83, width: 20, height: 12 },
      { number: 84, width: 20, height: 12 },
      { number: 85, width: 20, height: 12 },
      { number: 86, width: 20, height: 12 },
    ],
  },

  // row-32
  {
    id: "row-32",
    rotate: "45deg",
    x: 118,
    y: 404,
    seats: [
      { number: 87, width: 20, height: 12 },
      { number: 88, width: 20, height: 12 },
      { number: 89, width: 20, height: 12 },
      { number: 90, width: 20, height: 12 },
    ],
  },

  // row-33
  {
    id: "row-33",
    rotate: "45deg",
    x: 107,
    y: 326,
    seats: [
      { number: 91, width: 20, height: 12 },
      { number: 92, width: 20, height: 12 },
    ],
  },

  // row-34
  {
    id: "row-34",
    rotate: "45deg",
    x: 145,
    y: 378,
    seats: [
      { number: 93, width: 20, height: 12 },
      { number: 94, width: 20, height: 12 },
      { number: 95, width: 20, height: 12 },
      { number: 96, width: 20, height: 12 },
    ],
  },

  // row-35
  {
    id: "row-35",
    rotate: "45deg",
    x: 115,
    y: 318,
    seats: [
      { number: 97, width: 20, height: 12 },
      { number: 98, width: 20, height: 12 },
    ],
  },

  // row-36
  {
    id: "row-36",
    rotate: "45deg",
    x: 153,
    y: 370,
    seats: [
      { number: 99, width: 20, height: 12 },
      { number: 100, width: 20, height: 12 },
      { number: 101, width: 20, height: 12 },
      { number: 102, width: 20, height: 12 },
    ],
  },

  // row-37
  {
    id: "row-37",
    rotate: "-45deg",
    x: 187,
    y: 310,
    seats: [
      { number: 106, width: 20, height: 12 },
      { number: 105, width: 20, height: 12 },
      { number: 104, width: 20, height: 12 },
      { number: 103, width: 20, height: 12 },
    ],
  },

  // row-38
  {
    id: "row-38",
    rotate: "-45deg",
    x: 179,
    y: 302,
    seats: [
      { number: 110, width: 20, height: 12 },
      { number: 109, width: 20, height: 12 },
      { number: 108, width: 20, height: 12 },
      { number: 107, width: 20, height: 12 },
    ],
  },

  // row-39
  {
    id: "row-39",
    rotate: "-45deg",
    x: 151,
    y: 278,
    seats: [
      { number: 114, width: 20, height: 12 },
      { number: 113, width: 20, height: 12 },
      { number: 112, width: 20, height: 12 },
      { number: 111, width: 20, height: 12 },
    ],
  },

  // row-40
  {
    id: "row-40",
    rotate: "-45deg",
    x: 143,
    y: 270,
    seats: [
      { number: 118, width: 20, height: 12 },
      { number: 117, width: 20, height: 12 },
      { number: 116, width: 20, height: 12 },
      { number: 115, width: 20, height: 12 },
    ],
  },

  // row-41
  {
    id: "row-41",
    rotate: "-45deg",
    x: 117,
    y: 243,
    seats: [
      { number: 122, width: 20, height: 12 },
      { number: 121, width: 20, height: 12 },
      { number: 120, width: 20, height: 12 },
      { number: 119, width: 20, height: 12 },
    ],
  },

  // row-42
  {
    id: "row-42",
    rotate: "-45deg",
    x: 109,
    y: 235,
    seats: [
      { number: 126, width: 20, height: 12 },
      { number: 125, width: 20, height: 12 },
      { number: 124, width: 20, height: 12 },
      { number: 123, width: 20, height: 12 },
    ],
  },

  // row-43
  {
    id: "row-43",
    rotate: "-45deg",
    x: 112,
    y: 199,
    seats: [
      { number: 128, width: 20, height: 12 },
      { number: 127, width: 20, height: 12 },
    ],
  },

  // row-44
  {
    id: "row-44",
    rotate: "-45deg",
    x: 104,
    y: 191,
    seats: [
      { number: 130, width: 20, height: 12 },
      { number: 129, width: 20, height: 12 },
    ],
  },

  // row-45
  {
    id: "row-45",
    rotate: "45deg",
    x: 179,
    y: 211,
    seats: [
      { number: 134, width: 20, height: 12 },
      { number: 133, width: 20, height: 12 },
      { number: 132, width: 20, height: 12 },
      { number: 131, width: 20, height: 12 },
    ],
  },

  // row-46
  {
    id: "row-46",
    rotate: "45deg",
    x: 187,
    y: 203,
    seats: [
      { number: 138, width: 20, height: 12 },
      { number: 137, width: 20, height: 12 },
      { number: 136, width: 20, height: 12 },
      { number: 135, width: 20, height: 12 },
    ],
  },

  // row-47
  {
    id: "row-47",
    rotate: "0deg",
    x: 245,
    y: 142,
    seats: [
      { number: 140, width: 20, height: 12 },
      { number: 139, width: 20, height: 12 },
    ],
  },

  // row-48
  {
    id: "row-48",
    rotate: "0deg",
    x: 245,
    y: 131,
    seats: [
      { number: 142, width: 20, height: 12 },
      { number: 141, width: 20, height: 12 },
    ],
  },

  // row-49
  {
    id: "row-49",
    rotate: "90deg",
    x: 204,
    y: 138,
    seats: [
      { number: 144, width: 20, height: 12 },
      { number: 143, width: 20, height: 12 },
    ],
  },
];

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute z-3 right-[150px] top-[60px] flex gap-2">
      <Button onClick={() => zoomIn()}>+</Button>
      <Button onClick={() => zoomOut()}>-</Button>
      <Button onClick={() => resetTransform()}>x</Button>
    </div>
  );
};

export default function OfficeMap() {
  return (
    <div>
      <div>
        <SeatBookingControlBar />
      </div>
      <TransformWrapper initialScale={2}>
        {() => (
          <div className="relative">
            <TransformComponent>
              <div
                className="office-map-container"
                style={{ position: "relative" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/map.jpg"
                  alt="Office Map"
                  className="office-map"
                  style={{
                    width: "1000px",
                  }}
                />
                {DESKS.map((row) => (
                  <div
                    key={row.id}
                    style={{
                      transform: `rotate(${row.rotate})`,
                      position: "absolute",
                      left: row.x,
                      top: row.y,
                      display: "flex",
                    }}
                  >
                    {row.seats.map((seat) => (
                      <Seat
                        id={row.id + "-" + seat.number}
                        key={seat.number}
                        width={seat.width}
                        height={seat.height}
                        seatNumber={seat.number}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </TransformComponent>
            <Controls />
          </div>
        )}
      </TransformWrapper>
    </div>
  );
}
