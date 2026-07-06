import Navbar from "@/components/Navbar";
import Camera from "@/components/Camera";
import Controls from "@/components/Controls";

export default function DoorbellPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-6">
          🚪 Doorbell
        </h1>

        <Camera />

        <Controls />

      </main>
    </>
  );
}
