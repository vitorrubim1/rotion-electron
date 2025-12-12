import { Link } from "react-router-dom";

export function DocumentPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-rotion-400">
      Documento
      <Link to="/">Ir para home</Link>
    </main>
  );
}
