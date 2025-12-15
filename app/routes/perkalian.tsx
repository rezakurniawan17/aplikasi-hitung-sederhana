import React from 'react'
import { RightAlert, FalseAlert } from '~/components/alert'
import { Card, CardHeader, CardBody, CardFooter } from '~/components/card'
import { Button } from '~/components/button'
import { Input } from '~/components/input'

export default function Perkalian() {
  // state for two random numbers between -100 and 100
  const [firstNumber, setFirstNumber] = React.useState<number>()
  const [secondNumber, setSecondNumber] = React.useState<number>()

  // state for user answer
  const [userAnswer, setUserAnswer] = React.useState<number>()

  // generate two random numbers on component mount
  React.useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10)
    const num2 = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10)
    setFirstNumber(num1)
    setSecondNumber(num2)
    setUserAnswer(undefined)
  }, [])

  // function to handle user answer change
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(Number(e.target.value))
  }

  // function to check if user answer is correct
  const isAnswerCorrect = () => {
    if (userAnswer === undefined) return false
    return userAnswer === firstNumber * secondNumber
  }

  return (
    <Card>
      <CardHeader
        title={header.title}
        description={header.description}
      />

      <CardBody>
        <div className="text-7xl font-semibold">
          {firstNumber} x {secondNumber}
        </div>

        <Input onChange={handleAnswerChange} />

        {userAnswer !== undefined && (
          isAnswerCorrect() ?
            <RightAlert message="Jawaban Anda Benar" /> :
            <FalseAlert message="Jawaban Anda Salah" />

        )}

        <Button name='Soal Baru' onClick={() => {
          const num1 = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10)
          const num2 = Math.floor(Math.random() * 10) || Math.floor(Math.random() * -10)
          setFirstNumber(num1)
          setSecondNumber(num2)
          setUserAnswer(undefined)
        }} />

      </CardBody>
      <CardFooter>
        <a href="/" className="block my-4 text-gray-600 text-center w-full text-sm  underline">
          Kembali ke halaman utama
        </a>
      </CardFooter>
    </Card>
  )
}


const header = {
  title: "Perkalian",
  description: "Tunjukkan kemampuan penjumlahanmu dengan menjawab soal berikut !"
}
