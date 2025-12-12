import { Link } from "react-router-dom";

export function BlankPage() {
  return (
    <main className="flex-1 flex items-center flex-col justify-center text-rotion-400">
      Selecione ou crie um documento
      <Link to="/document">Ir para documentos</Link>
    </main>
  );
}
