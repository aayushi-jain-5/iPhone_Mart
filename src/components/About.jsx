import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Welcome to IPHONE Mart, where innovation meets excellence. Established in 2020, we are a passionate team of professionals dedicated to delivering cutting-edge solutions in our company. Our journey began with a vision to help people buy an iPhone at a reasonable price, and since then, we have evolved into a trusted company.

At iPhone Mart, we take pride in our commitment to quality, creativity, and customer satisfaction. Our diverse team brings together a wealth of expertise, ensuring that we stay at the forefront of industry trends and deliver solutions that exceed expectations. Whether you're a friend or a stranger, we strive to provide you with the best deals on latest iPhones.

Transparency and integrity are at the core of our operations. We believe in fostering long-term relationships with our clients, partners, and stakeholders. Our dedication to continuous improvement and staying ahead of the curve empowers us to offer you the latest and most effective solutions in IPhone Mart.

Thank you for considering IPhone for your needs on buying the latest IPhones . Explore our website to discover more about our journey, values, and the innovative solutions we bring to the Iphone landscape. We look forward to being a part of your success story.</p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
