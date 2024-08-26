import TodoList from "@/app/ui/todo/todo-list";
import { Container } from "@mantine/core";

export default function Page() {
  return (
    <Container className="pt-3">
      <TodoList />
    </Container>
  );
}
