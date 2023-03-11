import React from 'react'
import pic from '../images/Ratish-Jain.jpeg'
import './styles/blogs.css'
function Blogs() {
    return (
        <div className="Blogs">
            <div className="intro-card">
                <img src={pic} className="mypic" alt="mypic" />
                <div className='content'>
                    I write blogs on Data structures and Algorithms,
                    Web Development, Flutter Development and all other techy stuff
                    on Hashnode make sure to follow me on it
                </div>

                <button className="button-54" >Hashnode</button>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Blogs