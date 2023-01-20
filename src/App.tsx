import { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqualApp, useAppSelector } from './store'
import { useAppDispatch } from './store/index'
import { changeCountAction } from './store/modules/counter'

function App() {
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.counter.name,
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  const handleChangeCount = () => {
    dispatch(changeCountAction(count))
  }
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数:{count}</h2>
      <h2>{name}</h2>
      <button onClick={handleChangeCount}>+1</button>
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
