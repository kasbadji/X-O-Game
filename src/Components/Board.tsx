import Squares from "./Squares";

interface BoardProps{
    squares : (string|null)[];
    onClick : (i:number)=>void;
}


const Board = ({squares , onClick} : BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 border">
    {squares.map((values , index)=>(
        <Squares key={index} value={values} onClick={()=>onClick(index)}/>
    ))}
    </div>
  )
}

export default Board