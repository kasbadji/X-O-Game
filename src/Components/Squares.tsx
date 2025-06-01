interface SquaresProps{
    value : (string|null);
    onClick :()=>void;
}

const Squares = ({value , onClick} : SquaresProps) => {
  return (
    <>
    <div className="">
        <button 
        onClick={onClick}
         className="w-24 h-24 bg-white border-gray-400 hover:bg-gray-100 transition aspect-square border text-3xl font-bold flex items-center justify-center"
        >{value}</button>
    </div>
    </>
  )
}

export default Squares