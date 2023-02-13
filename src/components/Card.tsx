type CardProps = {
  title: string;
  isCompleted: boolean;
  onClick: () => void;
};

export default function Card(props: CardProps) {
  return (
    <div className="bg-white rounded shadow-md p-4 w-full">
      <div className="flex flex-row items-center gap-3">
        <button
          className={`${
            props.isCompleted ? 'bg-green-500' : 'bg-gray-500'
          } text-white px-3 py-1 rounded transition-transform hover:scale-90`}
          onClick={props.onClick}
        >
          {props.isCompleted ? 'Completed' : 'Complete'}
        </button>
        <div>
          <h2 className="text-xl font-bold">{props.title}</h2>
        </div>
      </div>
    </div>
  );
}
