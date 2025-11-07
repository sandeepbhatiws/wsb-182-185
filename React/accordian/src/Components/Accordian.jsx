import React, { useState } from 'react'
import data from '../faqData'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

export default function Accordian() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const setQuestion = (i) => {
        if(currentIndex == i){
            setCurrentIndex('-1');
        } else {
            setCurrentIndex(i);
        }
    }

    return (
        <>
            <div class="main">
                <div class="heading">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div class="question_answer">
                    {
                        data.map((item, index) => {
                            return (
                                <div class="main_question" key={ index }>
                                    <div class="outer_question" onClick={ () => setQuestion(index) }>
                                        <div class="question" >{ index+1 }. { item.question }</div>
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
                                    <div class={ currentIndex == index ? "answer" : "answer d-none" }>
                                        { item.answer }
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}
