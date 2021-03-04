import './NonoGame.css';

function Field(props) {
  return (
    <div onClick={()=>{console.log(props.value)}} className={props.classN}></div>
  );
}

function Tip(props){
  return (
    <div className={props.classN}>{props.value}</div>
  );
}

function Board() {
  
  const emptyBoard = generateEmptyBoard(10);
  const initedBoard = emptyBoard.map((row) => {
    return row.map(() => {
      return randomBool();
    }
    );
  });
  return (
    <div>
      {
        initedBoard.map((item, index) => {
          console.log(item)
          return (
            <div className="flex">
              {
                item.map((subitem, index2) => {
                  console.log(subitem)
                  return (
                    <Field classN="field" value={subitem} key={index2}></Field>
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  );
  /*return (
    <div className="mainBoard">
      {
        initedBoard.map((item, index) => {
          console.log(item)
          return (
            <div className="flex">
              {
                item.map((subitem, index2) => {
                  console.log(subitem)
                  return (
                    <div className="field" key={index2}>
                      {subitem.toString()}
                    </div>
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  );*/
}

function Toolbar() {
  return (
    <div>toolbar</div>
  );
}

function TipsLeft() {
  const emptyBoard = generateEmptyBoard(10);
  const initedTipsLeft = emptyBoard.map((row) => {
    return row.map(() => {
      return 0;
    }
    );
  });
  return (
    <div>
      {
        initedTipsLeft.map((item, index) => {
          return (
            <div className="flex">
              {
                item.map((subitem, index2) => {
                  return (
                    <Tip classN="tip-field" value={subitem} key={index2}></Tip>
                  );
                })
              }
            </div>
          )
        })
      }
    
    </div>
  );
}

function TipsUpper() {
  const emptyBoard = generateEmptyBoard(10);
  const initedTipsUpper = emptyBoard.map((row) => {
    return row.map(() => {
      return 0;
    }
    );
  });
  return (
    <div className="right">
      {
        initedTipsUpper.map((item, index) => {
          return (
            <div className="flex">
              {
                item.map((subitem, index2) => {
                  return (
                    <Tip classN="tip-field" value={subitem} key={index2}></Tip>
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}

function NonoGame() {
  return ( // tu musi to być wpakowane w div, bo moe być tylko jeden parent element
    <div className="game">
      <div className="game-container-row right">
        <TipsUpper></TipsUpper>
      </div>
      <div className="game-container-row">
        <TipsLeft></TipsLeft>
        <Board></Board>
      </div>
      <div>
        <Toolbar></Toolbar>
        <Field></Field>
      </div>
    </div>
  );
}

export default NonoGame;

function generateEmptyBoard(size){
  return Array(size).fill(Array(size).fill());
}
function randomBool() {
  return (Math.random() < 0.5);
}