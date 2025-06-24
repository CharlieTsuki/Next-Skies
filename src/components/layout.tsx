import { type PropsWithChildren } from "react";
import Header from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      {/* <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>made with love by Om</p>
        </div>
      </footer> */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-muted-foreground bg-white dark:bg-black">
        <div className="max-w-screen-xl mx-auto px-4">
          <p className="mb-1">
            <strong>Next Skies</strong> is a modern weather web app built with
            React, TypeScript, Vite, and the OpenWeatherMap API. It offers
            real-time weather forecasts, location-based search, and a clean UI
            powered by ShadCN UI components.
          </p>
          <p className="mt-2">
            Developed by <span className="font-semibold">Om</span> — feel free
            to connect:{" "}
            <a
              href="https://www.instagram.com/charlie_tsuki/?__pwa=1#"
              className="ml-1 underline hover:text-blue-500"
            >
              instagram
            </a>{" "}
            <a
              href="https://github.com/CharlieTsuki"
              className="ml-1 underline hover:text-blue-500"
            >
              Github
            </a>
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Next Skies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
