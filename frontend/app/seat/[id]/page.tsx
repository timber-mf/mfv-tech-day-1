import { Button, Group, Center, Title, Space } from "@mantine/core";
import BookingButton from "@/app/ui/seat/booking-button";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Center>
        <Group>
          <Title>Seat {params.id}</Title>
        </Group>
        <Space h="md" />
        <Group>
          <BookingButton seatId={params.id} />
          <Button>Check-in</Button>
        </Group>
      </Center>
    </>
  );
}
