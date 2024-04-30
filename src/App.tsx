import { Button } from './components/ui/button'
import Config from './config'

function App() {
  const env =  Config.TEST
  return (
    <>
      <div className='m-5'>
      <Button>MY Button</Button>
      <>{env} alkdsfds</>
      </div>
    </>
  )
}

export default App
