"use client";

export default function Controls() {
  async function ring() {
    try {
      await fetch("/api/ring", {
        method: "POST",
      });

      alert("Ringning skickad.");
    } catch {
      alert("Kunde inte skicka ringning.");
    }
  }

  return (
    <div className="flex gap-4 mt-5">
      <button
        onClick={ring}
        className="bg-red-600 px-6 py-3 rounded-lg"
      >
        🔔 Ring
      </button>

      <button
        className="bg-green-600 px-6 py-3 rounded-lg"
      >
        📷 Snapshot
      </button>
    </div>
  );
}
