import { Header } from "./components/Header";
import { Router } from "./components/Router";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Router />
      </main>
      <Footer />
    </div>
  );
}