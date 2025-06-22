import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left text-foreground">
      System Sądowniczy Online
    </h1>
    <p className="text-center sm:text-left text-base sm:text-lg max-w-xl text-muted-foreground">
      Witaj w wewnętrznej aplikacji do zarządzania sprawami sądowymi. Zaloguj się, aby przeglądać sprawy, przesłuchania, dokumenty i zarządzać uczestnikami.
    </p>

    <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      <li className="mb-2 tracking-[-.01em]">
        Zaloguj się lub utwórz konto testowe.
      </li>
      <li className="tracking-[-.01em]">
        Skorzystaj z panelu administratora, aby dodać sprawy i przypisać uczestników.
      </li>
    </ol>

    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="/dashboard"
      >
        Rozpocznij
      </a>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
        href="/docs"
      >
        Dokumentacja
      </a>
    </div>
  </main>

  <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm">
    <a
      className="hover:underline hover:underline-offset-4"
      href="/team"
    >
      Zespół projektu
    </a>
    <a
      className="hover:underline hover:underline-offset-4"
      href="/kontakt"
    >
      Kontakt
    </a>
    <a
      className="hover:underline hover:underline-offset-4"
      href="/regulamin"
    >
      Regulamin
    </a>
  </footer>
</div>
  );
}
