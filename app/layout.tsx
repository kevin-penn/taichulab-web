import Link from 'next/link';
import "/public/css/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh_CN">
      <head>
        <title>太初实验室 - 探索未知始于太初</title>
        <link rel="icon" href="/imgs/favicon.png" />
      </head>
      <body>
        <nav className="bg-black md:bg-opacity-30">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-block py-3">
              <img
                  src="/imgs/logo-web-head.png"
                  alt="太初实验室"
                  width={160}
                  height={48}
                  className="h-12 w-auto"
                />
            </Link>
          </div>
        </nav>
        <main>
        {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
