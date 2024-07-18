import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

export default function LandingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: "20px" }}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBar />

      <div style={{ position: "relative", zIndex: -1 }}> {children}</div>

      <Footer />
    </section>
  );
}
