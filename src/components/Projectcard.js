import React from 'react'
import './projectcard.css'
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { SiGooglestreetview } from 'react-icons/si'
import { Link } from 'react-router-dom'



function Projectcard({ title, image, githublink, hostedlink }) {
    return (

        <div >
            <FlippingCard className='pcard'>
                <FlippingCardFront  >
                    <div className='pcardfront'>
                        <img className="thumbnail" src={image} alt="p-card" />

                    </div>

                </FlippingCardFront>
                <FlippingCardBack >
                    <div className='pcardback'>
                        <h2 className='ptitle'>{title}</h2>
                        <div className="sources">
                            <Link to={`${githublink}`}> <AiFillGithub className='logos' /></Link>
                            <Link to={`${hostedlink}`}><AiFillEye className='logos' /></Link>
                        </div>
                    </div>
                </FlippingCardBack>
            </FlippingCard>

        </div >
    )
}

export default Projectcard