"use client";

import {
  Button,
  Container,
  Center,
  Space,
  AppShell,
  Group,
  TextInput,
} from "@mantine/core";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Image from "next/image";
import { signIn } from "next-auth/react";

type LoginForm = {
  username: string;
  password: string;
};

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
          <Center className={"flex-col"}>
            <TextInput label="Username" w="300px" />
            <Space h="xs" />
            <TextInput label="Password" w="300px" />
            <Space h="lg" />
            <Button variant="outline" color="black" w="300px">
              Login
            </Button>
          </Center>
          <Space h="lg" />
          <Space h="lg" />
          <Center>
            <Group>
              <Button
                type="submit"
                size="md"
                color="#4285F4"
                leftSection={<IconBrandGoogle size={24} />}
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </Button>
              <Button
                type="submit"
                size="md"
                color="black"
                leftSection={<IconBrandGithub size={24} />}
                onClick={() => signIn("github")}
              >
                Sign in with GitHub
              </Button>
            </Group>
          </Center>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
