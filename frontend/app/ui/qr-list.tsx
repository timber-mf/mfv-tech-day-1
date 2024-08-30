"use client";
import { useEffect, useState } from "react";
import { Container, Grid, Card, Text, Center, Space } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";
import { Todo } from "../lib/todo";

export default function SeatList() {
  const [seats, setSeats] = useState<number[]>([]);
  const router = useRouter();
  const service = Todo.useService();

  useEffect(() => {
    async function fetchSeats() {
      try {
        const response = await fetch(
          "https://api.paat.party/api/seats?from=2024-08-30T09:44:17&to=2024-08-30T09:44:17",
          {
            headers: {
              Authorization: `Bearer ${service?.user?.token}`,
            },
          },
        );
        const data = await response.json();
        setSeats(data.map((i: any) => i.id));
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    }

    fetchSeats();
  }, []);

  return (
    <Container>
      <Grid>
        {seats.map((seat) => {
          const seatLink = `https://seat.paat.party/seat/${seat}`;
          return (
            <Grid.Col key={seat} span={4}>
              <Card
                shadow="sm"
                padding="lg"
                onClick={() => {
                  router.push(`/seat/${seat}`);
                }}
              >
                <Center>
                  <Text mt="md">Seat {seat}</Text>
                </Center>
                <Space h="sm" />
                <Center mb="sm">
                  <QRCodeSVG value={seatLink} />
                </Center>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
