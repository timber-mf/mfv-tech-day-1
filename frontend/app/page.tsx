import { auth } from "@/app/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <div></div>
    </main>
  );
}
