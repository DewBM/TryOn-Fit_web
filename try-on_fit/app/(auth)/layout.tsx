export default function Layout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div className="min-h-screen flex justify-center items-center">
         <div className="w-2/5"></div>
         <div className="">{children}</div>
      </div>
   )
}