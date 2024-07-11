export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex  max-h-screen overflow-y-auto  p-4 py-8  2xl:p-8 ">
      {children}
    </main>
  );
}
