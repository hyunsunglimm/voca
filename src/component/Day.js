import { useParams } from "react-router-dom"; // url 값을 사용할 때 사용
import useFetch from "../hooks/useFetch";
import Word from "./Word";
import MoveButton from "./MoveButton";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      <MoveButton />
    </>
  );
}
