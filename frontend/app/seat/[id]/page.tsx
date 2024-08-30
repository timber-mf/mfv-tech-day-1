import { Button, Group } from "@mantine/core";
import BookingButton from "@/app/ui/seat/booking-button";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <p>Seat {params.id}</p>
      <Group>
        <BookingButton seatId={params.id} />
        <Button>Check-in</Button>
      </Group>
    </>
  )
}