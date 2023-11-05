import React from 'react';
import faqData from '../data/faqData';

function FAQ() {
    return (
        <section>
            <h2>FAQ</h2>
            <ul>
                {faqData.map((item, index) => (
                    <li key={index}>
                        <strong>Q.{index + 1} {item.question}</strong>
                        <br />Ans. {item.answer}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FAQ;
