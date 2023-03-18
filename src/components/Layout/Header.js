import Button from "../UI/Button";

export default function Header(props) {
  return (
    <div className="text-sky-400  text-center from-sky-300 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* <h2 className="text-sky-700 text-7xl">Habit Tracker</h2> */}
      <h1 className="text-3xl font-bold text-sky-400">Habit Tracker</h1>      
      <ul className="flex justify-around text-white font-bold">
        <li className="p-4"><Button>User </Button></li>
        <li className="p-4"><Button>About </Button></li>
        <li className="p-4"><Button>Save </Button></li>
      </ul>
    </div>
  );
}
