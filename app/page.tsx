import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex min-h-screen items-center justify-center pt-16">
          <h1 className="text-4xl font-bold text-foreground">Finturk</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
