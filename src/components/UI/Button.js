export default function Button(props) {
    return <button className="bg-sky-400 rounded-lg hover:bg-black hover:text-sky-400 px-5 py-1">{props.children}</button>
}