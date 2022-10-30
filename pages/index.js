import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

const Home = () => {

    const [send, setSend] = useState(false)
    const [rating, setRanting] = useState(null)

    const selectOption = (optionId) => {

        const actives = document.getElementsByClassName('active')
        if (actives.length > 0) {
            actives[0].classList.remove('active')
        }

        const option = document.getElementById(optionId)
        option.classList.add('active')
        setRanting(optionId)
    }

    const submit = () => {
        if (rating != null) {
            setSend(true)
        }
    }

    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <title>Frontend Mentor | Interactive rating component</title>
            </Head>
            <main>
                <div className="content">
                    {!send && <div className="card">
                        <Image className="icon-star" width={15} height={15} src={'/images/icon-star.svg'} alt='icon of star' />
                        <h1 className="question">How did we do?</h1>
                        <p>
                            Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!
                        </p>
                        <ul className="options">
                            <li id="1" onClick={() => selectOption('1')}>1</li>
                            <li id="2" onClick={() => selectOption('2')}>2</li>
                            <li id="3" onClick={() => selectOption('3')}>3</li>
                            <li id="4" onClick={() => selectOption('4')}>4</li>
                            <li id="5" onClick={() => selectOption('5')}>5</li>
                        </ul>
                        <button className="button" onClick={() => submit()}>submit</button>
                    </div>}
                    {send && <div className="card">
                        <Image className="thank-you-image" width={0} height={0} src={'/images/illustration-thank-you.svg'} alt='image of thank you' />
                        <p className="selectetion-texts">You select {rating} out of 5</p>
                        <p className="thank-you-text">Thank you!</p>
                        <p>We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!</p>
                    </div>}
                </div>
            </main>
            <footer>
                <footer>
                    <div class="attribution">
                        <p>
                            Challenge by <a
                                href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
                                target="_blank">Frontend Mentor</a>.
                        </p>
                        <p>
                            Coded by <a href="https://github.com/Luis-AngelF" target="_blank">Luis-AngelF</a>.
                        </p>
                    </div>
                </footer>
            </footer>
        </>
    )
}

export default Home