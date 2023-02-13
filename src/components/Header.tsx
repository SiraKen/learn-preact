import { Link } from 'preact-router';

export default function Header() {
  return (
    <header className="flex flex-row justify-between p-3 bg-slate-500 text-white">
      <h1>Vite + Preact</h1>
      <ul className="flex flex-row gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
        <li>
          <Link href="/todo">Todo</Link>
        </li>
      </ul>
    </header>
  );
}
