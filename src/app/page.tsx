import WalletGenerator from "@/components/WalletGenerator";

export default function Home() {
  return (
    <main className="max-w-full mx-auto flex flex-col justify-center items-center gap-4 p-4 min-h-[78vh]">
      <WalletGenerator />
    </main>
  );
}
