import "./globals.css";
import Providers from "./Providers";
export const metadata = {
  title: "GUDS",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <body>
          <Providers>{children}</Providers>
        </body>
      </>
    </html>
  );
}
