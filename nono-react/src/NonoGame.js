import './NonoGame.css';

function Field(props) {
  let x = '';
  if (props.value) {
    x = 'x';
  }
  return (
    <div onClick={() => { console.log(props.value) }} className={props.classN}>{x}</div>
  );
}

function Tip(props) {
  return (
    <div className={props.classN}>{props.value}</div>
  );
}

function Board(props) {
  const initedBoard = props.currentGame;
  return (
    <div>
      {
        initedBoard.map((item, rowId) => {
          return (
            <div className="row">
              {
                item.map((subitem, index2) => {
                  return (
                    <Field classN="field" fieldId={[rowId, index2]} value={subitem} key={index2}></Field>
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
            <div className="row">
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

function TipsLeft(props) {
  const currentGame = props.currentGame;
  const emptyBoard = generateEmptyBoard(10, 5);
  const initedTipsLeft = emptyBoard.map((row, rowIndex) => {
    let sum = 0;
    const resultArray = [];
    for (let i = 0; i < currentGame.length; i++) {
      if (currentGame[rowIndex][i]) {
        sum++;
        if (i === currentGame.length - 1) {
          resultArray.push(sum);
        }
      } else {
        resultArray.push(sum);
        sum = 0;
      }
    }
    let idx = 0;
    while (idx > -1) {
      idx = resultArray.indexOf(0);
      if (idx > -1) {
        resultArray.splice(idx, 1);
      }
    }
    for (let i = resultArray.length; i < 5; i++) {
      resultArray.unshift('');
    }
    return resultArray;
  });
  return (
    <div>
      {
        initedTipsLeft.map((item) => {
          return (
            <div className="row">
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

function TipsUpper(props) {
  const currentGame = props.currentGame;
  const emptyBoard = generateEmptyBoard(5, 10);
  const initedTipsUpper = emptyBoard[0].map((row, rowIndex) => {
    let sum = 0;
    const resultArray = [];
    for (let i = 0; i < currentGame.length; i++) {
      if (currentGame[i][rowIndex]) {
        sum++;
        if (i === currentGame.length - 1) {
          resultArray.push(sum);
        }
      } else {
        resultArray.push(sum);
        sum = 0;
      }
    }
    let idx = 0;
    while (idx > -1) {
      idx = resultArray.indexOf(0);
      if (idx > -1) {
        resultArray.splice(idx, 1);
      }
    }
    for (let i = resultArray.length; i < 5; i++) {
      resultArray.unshift('');
    }
    return resultArray;
  });
  initedTipsUpper.reverse();
  console.log('x',initedTipsUpper)
  return (
    <div className="right">
      <div className="rotated">
      {
        initedTipsUpper.map((item) => {
          return (
            <div className="row">
              {
                item.map((subitem, index2) => {
                  return (
                    <Tip classN="tip-field innerRotated" value={subitem} key={index2}></Tip>
                  );
                })
              }
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

function NonoGame() {
  const emptyBoard = generateEmptyBoard(10, 10);
  const initedBoard = emptyBoard.map((row) => {
    return row.map(() => {
      return randomBool();
    }
    );
  });
  return ( // tu musi to być wpakowane w div, bo moe być tylko jeden parent element
    <div className="game">
      <div className="row right">
        <TipsUpper currentGame={initedBoard}></TipsUpper>
      </div>
      <div className="row">
        <TipsLeft currentGame={initedBoard}></TipsLeft>
        <Board currentGame={initedBoard}></Board>
      </div>
      <div>
        <Toolbar></Toolbar>
      </div>
    </div>
  );
}

export default NonoGame;

function generateEmptyBoard(sizeX, sizeY) {
  return Array(sizeX).fill(Array(sizeY).fill());
}
function randomBool() {
  return (Math.random() < 0.5);
}