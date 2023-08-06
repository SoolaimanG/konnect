import MessageContainer from "@/messages/messageContainer";
import "./globals.css";
import { ContextProvider } from "@/Providers/provider";
import Overall from "@/messages/overall";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <div className="fixed z-30 top-0 right-0 mt-[68px] mr-3 md:mr-10">
            <Overall />
          </div>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
