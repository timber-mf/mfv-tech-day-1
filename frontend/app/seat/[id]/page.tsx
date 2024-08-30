import { Button, Group } from "@mantine/core";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <p>Seat {params.id}</p>
      <Group>
        <Button>Book</Button>
        <Button>Check-in</Button>
      </Group>
    </>

  )
}