export default function layout({ children }) {
  return (
    <div className="my-8 p-5 text-2xl flex justify-center gap-5 items-center">
      <aside>
        <ul>
          <li>
            <a href="/camera">camera</a>
          </li>
          <li>
            <a href="/mobile">mobile</a>
          </li>
          <li>
            <a href="/laptop">laptop</a>
          </li>
        </ul>
      </aside>
      <div>{children}</div>
    </div>
  );
}
