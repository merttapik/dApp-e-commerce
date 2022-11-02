import React from 'react'
import Image from "next/image";
function AboutUs() {
  return (
    <div><section id="about" className="py-5 section-color ">
    <div className="container">
        <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
                <div className="title pt-3 pb-5">
                    <h2 className="position-relative d-inline-block ms-4">About Us</h2>
                </div>
                <p className="lead about-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                <p className="lead about-lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
            </div>
            <div className="col-lg-6 order-lg-0">
                <Image src="/logomuz.png" alt=""
                    className="img-fluid"
                    width="512"
                    height="512"
                />
            </div>
        </div>
    </div>
</section></div>
  )
}

export default AboutUs