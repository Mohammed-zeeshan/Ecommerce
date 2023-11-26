import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const About = () => {
  return (
    <div>
        <div className="nav justify-content-center bg-dark text-white">
            <button className='navbar-toggler p-3 fw-bold'>HOME</button>
            <NavLink to="/" className='navbar-toggler p-3 fw-bold' >STORE</NavLink>
            <NavLink to="/About" className='navbar-toggler p-3 fw-bold' >ABOUT</NavLink>
        </div>
        <div className="p-5 mb-3 bg-secondary text-white">
            <h1 className='text-center'>The Generics</h1>
        </div>
        <div className='container'>
            <h3 className='text-center'>ABOUT</h3>
            <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
        </div>
        <Footer />
    </div>
  )
}

export default About
