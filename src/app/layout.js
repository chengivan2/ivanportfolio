import "./globals.css";

export const metadata = {
  title: "Ivan the Dev",
  description: "Hey there! I know what we're gonna do today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ivan-the-dev-page-pill">{children}</div>
      </body>
    </html>
  );
}
