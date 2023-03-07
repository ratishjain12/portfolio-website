import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';
import { AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { SiLeetcode, SiHashnode, SiGeeksforgeeks } from 'react-icons/si';
import wave from '../images/wave.png';
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='Description'>
                <motion.div whileHover={{ scale: 1.1 }} initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.7, type: "tween" }} className='profile-section'>
                    <img src={wave} alt="profile" className='wave' />
                </motion.div>

                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.3, type: "tween" }} className='name'>Hi, I'm &nbsp;<TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Poppins',
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '1em',
                    }}

                    startDelay={1000}
                    cursorColor="white"
                    multiText={[
                        'Ratish Jain',
                        'A Web Developer',
                        'A Flutter Developer',

                    ]}
                    multiTextLoop
                    multiTextDelay={1000}
                    typeSpeed={50} />

                </motion.span>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/ratish-jain-296276202/'>
                        <motion.div whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }} ><AiOutlineLinkedin className="profiles-icon" /></motion.div></a>
                    <a href="https://twitter.com/jain_ratish">
                        <motion.div whileHover={{ scale: 1.3 }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}><AiOutlineTwitter className="profiles-icon" /></motion.div></a>
                    <a href='https://leetcode.com/ratishjain6/'>
                        <motion.div whileHover={{ scale: 1.3 }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}><SiLeetcode className="profiles-icon" /></motion.div></a>
                    <a href='https://devcon.hashnode.dev/'>
                        <motion.div whileHover={{ scale: 1.3 }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}><SiHashnode className="profiles-icon" /></motion.div></a>
                    <a href="https://auth.geeksforgeeks.org/user/ratishjain6">
                        <motion.div whileHover={{ scale: 1.3 }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}><SiGeeksforgeeks className="profiles-icon" /></motion.div></a>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4, type: "tween" }}
                    className='about'>
                    <p>Strong in design and integration with intuitive problem-solving skills. Proficient in JAVA, C++, PYTHON, JAVASCRIPT, DART and SQL. Passionate about implementing and launching new projects.</p>
                </motion.div>
                <div className='Projects-button'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4, type: "tween" }}>


                        <Link to='/projects'><motion.button whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }} className='checkout-button'>Checkout My Works</motion.button></Link>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Banner