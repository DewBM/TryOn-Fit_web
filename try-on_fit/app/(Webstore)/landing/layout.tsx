import NavBar from "@/app/components/NavBar"
import Footer from "@/app/components/Footer"

export default function LandingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       <NavBar />
       <div className="pt-[6.5rem]"></div>
       <div> {children}</div>

       <Footer />
       

      </section>
    )
  }