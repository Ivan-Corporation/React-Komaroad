import { render } from "react-dom"
import React, { useState, useEffect, useCallback } from 'react'
import useFetch, { Provider } from 'use-http'
import { Button, Snowflakes, Input, Loading, Col, Row, Center } from './use-http'


// Задаем начальные состояния (стейты)
const TodoList = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  // Виновник торжества useFetch
  const { get, post, response, loading, error } = useFetch({ data: [] })

  const loadInitialTodos = useCallback(async () => {

    const initialTodos = await get('/todos')
    if (response.ok) setTodos(initialTodos)
  }, [get, response])

  useEffect(() => { loadInitialTodos() }, [loadInitialTodos]) // componentDidMount

  const addNewTodo = useCallback(async () => {
    if (!title) return 
    const newTodo = await post('/todos', { title, body: title })
    if (response.ok) {
      setTitle('')
      // Добавляем новую задачу
      setTodos(todos => [newTodo, ...todos])
    }
  }, [post, response, title])

  return (
    <Snowflakes>
      <Center>
        <h1 style={{ marginBottom: 0 }}>use-http и хук useFetch</h1>
        <h3 style={{ margin: 0 }}>(Пример TODO)</h3>
        <br></br>
        <Row>
          <Input
            placeholder='Новая задача 🔥'
            value={title}
            onChange={e => setTitle(e.target.value)}
            right={loading && <Loading />}
          />
          <Button onClick={addNewTodo}>
            {loading ? 'Добавляем...' : 'Добавить'}
          </Button>
        </Row>
        <Col>
          {error && 'Ошибкинс!'}
          {todos.map((todo, i) => <div key={i}>{i + 1}. {todo.title}</div>)}
        </Col>
      </Center>
    </Snowflakes>
  )
}

const UseHTTP = () => (
  <Provider url='https://jsonplaceholder.typicode.com' options={{ cachePolicy: 'no-cache' }}>
    <TodoList />
  </Provider>
)
export default UseHTTP