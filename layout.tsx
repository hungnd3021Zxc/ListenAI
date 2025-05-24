import "./globals.css";
export const metadata = {
  title: "Listen AI UI",
  description: "Giao diện mô phỏng Listen AI",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}