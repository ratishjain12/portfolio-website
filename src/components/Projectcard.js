import React from 'react'
import './projectcard.css'
import { FlippingCard, FlippingCardBack, FlippingCardFront } from 'react-ui-cards'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { SiGooglestreetview } from 'react-icons/si'



function Projectcard() {
    return (

        <div >
            <FlippingCard className='pcard'>
                <FlippingCardFront  >
                    <div className='pcardfront'>
                        <img className="thumbnail" src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="p-card" />

                    </div>

                </FlippingCardFront>
                <FlippingCardBack >
                    <div className='pcardback'>
                        <h2 className='ptitle'>Project</h2>
                        <div className="sources">
                            <AiFillGithub className='logos' />
                            <AiFillEye className='logos' />
                        </div>
                    </div>
                </FlippingCardBack>
            </FlippingCard>

        </div >
    )
}

export default Projectcard