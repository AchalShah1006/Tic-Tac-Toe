import React, {useState} from 'react';
import './App.css'


export default function HomePage() {

  const [array,setArray] = useState(Array(9).fill(null));
  const [player1,setPlayer1] = useState(0); // O
  const [player2,setPlayer2] = useState(0); // X
  const [winner,setWinner] = useState(false);
  const [isX,setX] = useState(false);
  const [round,setRound] = useState(1);
  const [alert,setAlert] = useState(0); // 1 for player-1 , 2 for player-2

  const list = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
  const reset = () => {
    setPlayer1(0);
    setPlayer2(0);
    setRound(0);
    setArray(array.fill(null,0));
    setX(false);
    setWinner(false);
  }

  const isWinner = (arr) => {
    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        if(arr[a] === 'O'){
          setPlayer1(point => {return point += 1});
          setAlert(1);
        }
        else if(arr[a] === 'X'){
          setPlayer2(point => {return point += 1});
          setAlert(2);
        }
        setWinner(true);
        setTimeout(() => {
          setRound(round => {return round += 1})
          setAlert(0);
          setArray(array.fill(null,0));
          setX(false);
          setWinner(false);
        },2000)
      }
    }
  }

  const handler =  (key) => {
    // Set Array Inputs
     if(!winner){
      const cpyArr = [...array];
      if(cpyArr[key] === null){
        cpyArr[key] = isX ? 'X' : 'O';
        setArray(cpyArr);
        setX(!isX);
      }
      isWinner(cpyArr);
     }
  }

  return (
    <>
      <nav>
        <div id="logoName">
          <h3>Tic Tac Toe</h3>
        </div>
      </nav>
      <main>
        <div className="pointTable">
        <h2>Points Table</h2>
          <div className="points">
            <div className="player p1">
              Player1: <span id="point1">{player1 }</span>
            </div>
            <div className="player p2">
              Player2: <span id="point2">{player2}</span>
            </div>
          </div>
          <div className="round">
            Round: {round}
          </div>
          <div className="player">
            <button className="reset" onClick={reset} >
              Reset
            </button>
          </div>
        </div>
        <div className="card">
          <div className="board">
            {[0,1,2,3,4,5,6,7,8].map(val=> (
              <button className="row" value={val} key={val} onClick={() => {handler(val)}}>
                {
                  array[val] !== null ? 
                  (array[val] === 'O' ? <span className="p1">O</span> : <span className="p2">X</span>)
                   : 
                  <span />
                }
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="alertBox">
          {alert !== 0 ? (alert === 1 ? <span className="p1">Player 1 Wins!</span>:<span className="p2">Player 2 Wins!</span>):(<span />)}
        </div>
      </footer>
    </>
  );
}
