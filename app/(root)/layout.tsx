import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logIn = {firstName: 'Henry', lastName: 'Le' };

  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user = {logIn}/>
        {children}
    </main>
  );
}
