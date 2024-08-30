"use client";
import { Container, Grid, Card, Text, Center } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";

export default function SeatList() {
  const seats = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <Container>
      <Grid>
        {seats.map((seat) => {
          const seatLink = `http://localhost:3000/seat/${seat}`;
          return (
            <Grid.Col key={seat} span={4}>
              <Card shadow="sm" padding="lg">
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
