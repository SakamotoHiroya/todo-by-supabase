import { UIProvider } from "@yamada-ui/react";
import Header from "@/components/Header";
import "./globals.css";
import styles from "./top.module.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "todo",
  description: "A todo app powered by supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={styles.background}>
        <UIProvider>
          <Header/>
          <main>
            {children}
          </main>
        </UIProvider>
      </body>
    </html>
  );
}
