import React from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

export default function Question({ index, item, currentIndex, setQuestion }) {
    return (
        <>
            <div class="main_question" key={index}>
                <div class="outer_question" onClick={() => setQuestion(index)}>
                    <div class="question" >{index + 1}. {item.question}</div>
                    <div class="icon">
                        {
                            currentIndex == index
                                ?
                                <FaMinusCircle />
                                :
                                <FaPlusCircle />
                        }
                    </div>
                </div>
                <div class={currentIndex == index ? "answer" : "answer d-none"}>
                    {item.answer}
                </div>
            </div>
        </>
    )
}
