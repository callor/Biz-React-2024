"use client";
import React, { useState, useEffect } from "react";
import "./SnakeGame.css";

const ROWS = 20;
const COLS = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const INTERVAL = 150;

function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const timerId = setInterval(moveSnake, INTERVAL);
    return () => clearInterval(timerId);
  }, [snake]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    const newDirection = e.key.toUpperCase().replace("ARROW", "");
    if (["UP", "DOWN", "LEFT", "RIGHT"].includes(newDirection)) {
      setDirection(newDirection);
    }
  };

  const moveSnake = () => {
    if (gameOver) return;
    const newHead = { ...snake[0] };
    switch (direction) {
      case "UP":
        newHead.y -= 1;
        break;
      case "DOWN":
        newHead.y += 1;
        break;
      case "LEFT":
        newHead.x -= 1;
        break;
      case "RIGHT":
        newHead.x += 1;
        break;
      default:
        return;
    }
    checkCollision(newHead);
    setSnake([newHead, ...snake.slice(0, -1)]);
  };

  const checkCollision = (head) => {
    if (
      head.x < 0 ||
      head.x >= COLS ||
      head.y < 0 ||
      head.y >= ROWS ||
      snake.some(
        (segment) => segment.x === head.x && segment.y === head.y
      )
    ) {
      setGameOver(true);
    } else if (head.x === food.x && head.y === food.y) {
      setFood(generateFood());
      setSnake([head, ...snake]);
    }
  };

  const generateFood = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * COLS),
        y: Math.floor(Math.random() * ROWS),
      };
    } while (
      snake.some(
        (segment) =>
          segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  };

  const renderCell = (row, col) => {
    const isSnake = snake.some(
      (segment) => segment.x === col && segment.y === row
    );
    const isFood = food.x === col && food.y === row;
    return (
      <div
        className={`cell ${isSnake ? "snake" : ""} ${
          isFood ? "food" : ""
        }`}
        key={`${row}-${col}`}
      />
    );
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        board.push(renderCell(row, col));
      }
    }
    return board;
  };

  return (
    <div className="snake-game">
      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
        }}
      >
        {renderBoard()}
      </div>
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
}

export default SnakeGame;
