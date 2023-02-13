import { JSX } from 'preact/jsx-runtime';

type ButtonProps = {
  onClick: () => void;
  children: JSX.Element;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-500 text-white px-3 py-1 rounded hover:shadow-md"
    >
      {props.children}
    </button>
  );
}
