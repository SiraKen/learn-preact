import { JSX } from 'preact/jsx-runtime';
import Header from '../components/Header';

export default function Layout(props: { children: JSX.Element }) {
  return (
    <>
      <div className="bg-gray-300 min-h-screen">
        <Header />
        <main className="py-5">{props.children}</main>
      </div>
    </>
  );
}
