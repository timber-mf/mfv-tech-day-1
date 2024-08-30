import { Button, Group, Center, Title, Space } from "@mantine/core";
import BookingButton from "@/app/ui/seat/booking-button";
import CheckinButton from "@/app/ui/seat/checkin-button";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Center>
        <Group>
          <Title>Seat {params.id}</Title>
        </Group>
      </Center>
      <Space h="md" />
      <Center>
        <Group>
          <BookingButton seatId={params.id} />
          <CheckinButton seatId={params.id} />
        </Group>
      </Center>
    </>
  );
}
