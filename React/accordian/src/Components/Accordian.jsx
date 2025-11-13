import React, { useState } from 'react'
import data from '../faqData'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import Question from './Question';

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
                                <Question key={index} index={index} item = {item} currentIndex ={currentIndex} setQuestion={setQuestion}/>
                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}
