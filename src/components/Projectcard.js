import React from 'react'
import './projectcard.css'
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



function Projectcard({ title, image, githublink, hostedlink }) {
    return (

        <div >
            <FlippingCard className='pcard' >
                <FlippingCardFront  >
                    <div className='pcardfront'>
                        <img className="thumbnail" src={image} alt="p-card" />

                    </div>

                </FlippingCardFront>
                <FlippingCardBack >

                    <div className='pcardback'>
                        <h2 className='ptitle'>{title}</h2>
                        <div className="sources">
                            <motion.div whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}> <Link to={`${githublink}`}> <AiFillGithub className='logos' /></Link></motion.div>
                            {hostedlink &&
                                <motion.div whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4, type: "tween" }}><Link to={`${hostedlink}`}><AiFillEye className='logos' /></Link></motion.div>}
                        </div>
                    </div>
                </FlippingCardBack>
            </FlippingCard>

        </div >
    )
}

export default Projectcard