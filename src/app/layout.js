import "./globals.css";

export const metadata = {
  title: "FriendFinder",
  description:
    "Discover people, make connections, and find your match.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}