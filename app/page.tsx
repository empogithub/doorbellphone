import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card w-[500px]">

        <h1 className="text-4xl font-bold mb-6">
          Digital Doorbell
        </h1>

        <div className="flex flex-col gap-4">

          <Link href="/doorbell">
            <button className="bg-blue-600 w-full p-4 rounded">
              Doorbell
            </button>
          </Link>

          <Link href="/client">
            <button className="bg-green-600 w-full p-4 rounded">
              Client
            </button>
          </Link>

          <Link href="/dashboard">
            <button className="bg-purple-600 w-full p-4 rounded">
              Dashboard
            </button>
          </Link>

        </div>

      </div>
    </main>
  );
}
