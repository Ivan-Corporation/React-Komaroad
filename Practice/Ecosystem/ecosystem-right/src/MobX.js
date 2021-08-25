import { observer } from "mobx-react-lite"
import { observable } from "mobx"
import { useState, useEffect } from "react"


const MobX = observer(() => { 

    const [timer] = useState(() =>
        observable({
            secondsPassed: 0,
            increaseTimer() {
                this.secondsPassed++
            }
        })
    )

    useEffect(() => {
        const handle = setInterval(() => {
            timer.increaseTimer()
        }, 1000)
        return () => {
            clearInterval(handle)
        }
    }, [timer])

    return <span>Часики тикают: {timer.secondsPassed}</span>
    
})
export default MobX