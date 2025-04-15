import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">Home</main>
      <Footer />
    </div>
  );
}
