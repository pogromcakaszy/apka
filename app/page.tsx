import Image from "next/image";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center min-h-screen">
        <div className="flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
          <Image
            src="/images/logoApp.png"
            alt="Logo"
            width={200}
            height={20}
          />
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left text-foreground"></h1>
        <p className="text-center sm:text-left text-base sm:text-lg max-w-xl text-muted-foreground"></p>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">Witaj w Systemie Zarządzania Sprawami Sądowymi.</li>
          <li className="tracking-[-.01em]"></li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/dashboard"
          >
            Zaloguj się
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
        <a className="hover:underline hover:underline-offset-4" href="/team">
          Zespół projektu
        </a>
        <a className="hover:underline hover:underline-offset-4" href="/kontakt">
          Kontakt
        </a>
      </footer>
    </div>
  );
}
