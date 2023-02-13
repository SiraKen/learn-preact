import { useState, useRef } from 'preact/hooks';
import Layout from '../layouts/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { Todo } from '../global/TodoState';

export default function TodoPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo() {
    if (inputRef.current) {
      Todo.value = [
        ...Todo.value,
        {
          text: inputRef.current.value,
          completed: false,
        },
      ];
      inputRef.current.value = '';
    }
  }

  function toggleTodoCompleted(index: number) {
    Todo.value = Todo.value.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }

  return (
    <Layout>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1>Todo</h1>
          <div className="flex flex-row gap-1 mb-3">
            <input
              type="text"
              className="rounded-md p-2"
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addTodo();
                }
              }}
            />
            <Button onClick={() => addTodo()}>
              <>Add todo</>
            </Button>
          </div>
          <div className="w-[720px]">
            <div className="flex flex-col gap-1">
              {Todo.value.map((todo, index) => (
                <Card
                  key={index}
                  title={todo.text}
                  isCompleted={todo.completed}
                  onClick={() => toggleTodoCompleted(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
