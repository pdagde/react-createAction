import React from 'react'
import Rainbow from '../HOC/Rainbow'

const Contact = (props) => {
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>In computing, React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. Wikipedia</p>
        </div>
    )
}
export default Rainbow(Contact)