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
        <nav className="bg-black">
          <img src="/imgs/logo-web-head.png" alt="太初实验室" className="h-12" />
        </nav>
        <main>
        {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
