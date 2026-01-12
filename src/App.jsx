import ResultTable from "./components/ResultTable"
import UserInput from "./components/UserInput"
import { useState } from 'react'


function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10

    })

    // putting new values based on the previous values (prevUserInput), and putting the (newValue) from user
    const handleInput = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
          return{
            ...prevUserInput,
            [inputIdentifier]: +newValue // adding a plus before newValue enforce conversion of string to number, because we recieve the (newValue) g from the user as a string
          }
        })
        
    }
  return (
    <>
      <UserInput userInput={userInput} onChangeHandle={handleInput}/>
      <ResultTable userInput={userInput}/>
    </>
  )
}

export default App
