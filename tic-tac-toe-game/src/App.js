function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
      <div className="board-row">
        <Square value={"X"} />
        <Square value={"X"} />
        <Square value={"X"} />
      </div>
    </>
  );
}
