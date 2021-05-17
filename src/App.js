import "./styles.css";
import data from "./sample_data.json";

//Questions for next week Issac :
//How do we
export default function App() {
  return (
    <div className="App">
      <h1> Crossword Game! </h1>
      <button> Check </button>
      <GameBoard data={data.answerKey} clueKeys={data.clueKey} />

      <table>
        <tr>
          <th> Across</th>
          <th> Down</th>
        </tr>
        <tr>
          <td>
            <AcrossClues data={data.AcrossClues} />
          </td>
          <td>
            <DownClues data={data.DownClues} />
          </td>
        </tr>
      </table>
    </div>
  );
}
// line 11: clueKey is to have the textboxes labeled
// from the beginning of the word

export function InputComponent(props) {
  //https://stackoverflow.com/questions/38420396/how-to-get-value-of-textbox-in-react
  // Add value as a state variable
  // onChange, set the state variable with the new value
  let correctLetter = props.letter;
  //const [value, setValue] = useState("");

  // function onCheck() {
  //   if (textbox.value !== correctLetter) {
  //   //
  //   }

  //   //need to put onchage input

  // }
  //need to put on change input
  // () => onchange (e) => setValue(e.target.value)
  return <input type="textbox" name="inputComponent" size="1" />;
}

export function EmptySpace() {
  return;
}

//line 8: <Table <Row <letter/> /> />
export function Letter(props) {
  return <td> {props.char} </td>;
}

export function Star() {
  return <td> * </td>;
}

//Talks about the across and down clues
export function LittleClues(props) {
  return (
    <p>
      {props.clue.orientation} {props.clue.number}: {props.clue.stringValue}
    </p>
  );
}

export function AcrossClues(props) {
  // props is an array
  // Loop over props and pass each clue into the clue component
  return (
    <div>
      {props.data.map((clue) => (
        <LittleClues clue={clue} />
      ))}
    </div>
  );
}
//missing ability if the user input === answer key
export function DownClues(props) {
  // props is an array
  // Loop over props and pass each clue into the clue component
  return (
    <div>
      {props.data.map((clue) => (
        <LittleClues clue={clue} />
      ))}
    </div>
  );
}

export function GameBoard(props) {
  // props.clueKey
  return (
    <table>
      {props.data.map((innerArray) => {
        return (
          <tr>
            {innerArray.map((StringAnswer) => {
              return (
                <td>{StringAnswer === "" ? <Star /> : <InputComponent />}</td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}
