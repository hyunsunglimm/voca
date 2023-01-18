import { Link } from "react-router-dom";
import "../css/MoveButton.css";
import useFetch from "../hooks/useFetch";

export default function MoveButton() {
  const days = useFetch("http://localhost:3001/days");

  return (
    <div className="container">
      {days.map((day) => (
        <div key={day.id}>
          <Link to={`/day/${day.day}`}>{day.day}</Link>
        </div>
      ))}
    </div>
  );
}
