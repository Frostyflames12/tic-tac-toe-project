import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  function editHandler() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName)

    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{btnCaption}</button>
    </li>
  );
}
