"use client";

import {
  Button,
  Container,
  Center,
  Space,
  AppShell,
  Group,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Image src="/logo.svg" alt="Money Forward" width={137} height={24} />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Container>
          <Space h="lg" />
          <Space h="lg" />
          <Center>
            <Button
              type="submit"
              size="md"
              color="black"
              leftSection={<IconBrandGithub size={24} />}
              onClick={() => signIn("github")}
            >
              Sign in with GitHub
            </Button>
          </Center>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
