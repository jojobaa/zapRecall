import AskOpen from './AskOpen'
import Card from './Card'

export default function Ask() {
    return (
        <>
            {
                AskOpen.map((q, i) => (<Card data-identifier="flashcard" numberQ={i + 1} question = {q.Q} answer = {q.R}/>))
            }
        </>

    )
}


