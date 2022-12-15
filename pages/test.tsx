import React from 'react'

import s from '../styles/test.module.scss'

function test() {
    return (
        <div className={s.test}>
            <div className={s.container}>
                <nav className={s.navbar}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <section className={s.section} id="home">
                    <h1>Welcome To My Site</h1>
                    <p className={s.lead}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </section>
                <section id="about" className={s.section} >
                    <h1>About</h1>
                    <p className={s.lead}>Lorem ipsum dolor sit, amet consectetu adipisicing elit. Commodi, quis!</p>
                </section>
                <section id="service" className={s.section} >
                    <h1>Service</h1>
                    <p className={s.lead}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </section>
                <section id="contact" className={s.section} >
                    <h1>Contact</h1>
                    <p className={s.lead}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </section>
            </div>
        </div>
    )
}

export default test