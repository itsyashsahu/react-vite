import { Fragment } from 'react/jsx-runtime'
import { Button } from './components/ui/button'
import { useCharacter, useCharacters } from './services/queries'

export interface CharacterData {
  // Define the structure of your character data here
  pageSize:number
}

function App() {
  // const characherData:CharacterData = {pageSize:2}
  // const charactes = useCharacters(characherData)

  const characterData = useCharacter(3)
  console.log("🚀 ~ App ~ characterData:", characterData)

  return (
    <>
      <div className='m-5'>
      <Button onClick={()=>{ }} >MY Button</Button>
      {/* <Button onClick={()=>{charactes.fetchNextPage({})}} >MY Button</Button> */}
      {/* {
        charactes.data?.pages.map((groupRes,index)=>{
          return (
            <Fragment key={index} >
              {
                groupRes?.data.results.map((ch,index)=>{
                  return (
                    <Fragment key={index}>
                    <div>id: {ch.id} ==  name: {ch.name} </div>
                    </Fragment>
                  )
                })
              }
            </Fragment>
          )
        })
      } */}
      </div>
    </>
  )
}

export default App
