/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function Countdown (): JSX.Element {
  const { activeCycle, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } = useContext(CyclesContext)
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (activeCycle) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      interval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const secondsDifference: any = differenceInSeconds(new Date(), activeCycle.startDate)

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
  }, [activeCycle, totalSeconds, markCurrentCycleAsFinished])

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <CountdownContainer>
           {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>
  )
}
