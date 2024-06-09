import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';

// Defining Metadata
export const metadata = {
  title: "Home Page | Paprika",
  description: "Find restaurants that cater to your dietary preferences",
  keywords: `restaurants, paprika, diet`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
