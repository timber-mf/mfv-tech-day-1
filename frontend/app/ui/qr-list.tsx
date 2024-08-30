"use client";
import { useEffect, useState } from "react";
import { Container, Grid, Card, Text, Center } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";

export default function SeatList() {
  const [seats, setSeats] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchSeats() {
      try {
        const response = await fetch("http://localhost:8080/api/seats");
        const data = await response.json();
        setSeats(data);
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
          const seatLink = `http://localhost:3000/seat/${seat}`;
          return (
            <Grid.Col key={seat} span={4}>
              <Card shadow="sm" padding="lg" onClick={() => {
                router.push(`/seat/${seat}`);
              }}>
                <Center>
                  <QRCodeSVG value={seatLink} />
                </Center>
                <Text mt="md">
                  Seat {seat}
                </Text>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}