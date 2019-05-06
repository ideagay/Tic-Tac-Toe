import React from 'react';
import Square from './Square';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            history: [],
            isXNext: true
        }
    }
    handleClick(i) {
        let squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.isXNext ? 'X' : 'O';
        let pos = (i + 1);
        let line = null;
        let column = null;
        if (pos / 3 <= 1) {
            line = 1;
        } else if (pos / 3 > 1 && pos / 3 <= 2) {
            line = 2;
        } else {
            line = 3;
        }
        if (pos % 3 === 1) {
            column = 1;
        } else if (pos % 3 === 2) {
            column = 2;
        } else {
            column = 3;
        }
        let history = this.state.history.concat([{
            squares: squares,
            position: `${squares[i]}落子：行${line}列${column}`
        }]);
        this.setState({
            squares: squares,
            history: history,
            isXNext: !this.state.isXNext
        });
    }
    jumpTo(val, i) {
        i++;
        let history = this.state.history.slice(0, i);
        this.setState({
            squares: val.squares,
            history: history,
            isXNext: i % 2 === 0 ? true : false
        });
    }
    gameInit() {
        this.setState({
            squares: Array(9).fill(null),
            history: [],
            isXNext: true
        });
    }
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = `winner is ${winner.winner}`; 
        } else if (!winner && this.state.history.length === 9) {
            status = '双方平局';
        } else {
            status = `Next player: ${this.state.isXNext ? 'X' : 'O'}`;
        }
        const squares = this.state.squares.map((val, i) => {
            return <Square value={val} active={winner && winner.line.indexOf(i) > -1} onClick={() => {this.handleClick(i)}} key={i}/>
        });
        const history = this.state.history.map((val, i) => {
            const desc = `Go to move #${i} ${val.position}`;
            const className = i + 1 === this.state.history.length ? 'current' : '';
            return (<p key={i} className={className}>
            <button type="button" onClick={() => {this.jumpTo(val, i)}}>{desc}</button>
            </p>);
        });
        return (
        <div>
            <p>{status}</p>
            <div className="board">
                {squares}
            </div>
            <div>
                <p>
                    <button type="button" onClick={() => {this.gameInit()}}>Go to game start</button>&nbsp;
                </p>
                {history}
            </div>
        </div>)
    }
}

function calculateWinner (squares) {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0, len = lines.length; i < len; i++) {
        let [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                line: [a, b, c],
                winner: squares[a]
            };
        }
    }
    return null;
}

export default Board;