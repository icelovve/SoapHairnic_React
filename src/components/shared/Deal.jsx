/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import { Link } from "react-router-dom"

const Deal = () => {
    return (
        <div className="container-fluid deal bg-primary my-5 py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid animated pulse infinite" src="assets/img/shampoo-2.png" />
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="bg-white text-center p-4">
                            <div className="border p-4">
                                <p className="mb-2">Natural &amp; Organic Shampoo</p>
                                <h2 className="fw-bold text-uppercase mb-4">Deals of the Day</h2>
                                <h1 className="display-4 text-primary mb-4">$99.99</h1>
                                <h5>Fresh Organic Shampoo</h5>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Etiam feugiat rutrum lectus sed auctor.</p>
                                <div className="row g-0 cdt mb-4">
                                    <div className="col-3">
                                        <h1 className="display-6" id="cdt-days" />
                                    </div>
                                    <div className="col-3">
                                        <h1 className="display-6" id="cdt-hours" />
                                    </div>
                                    <div className="col-3">
                                        <h1 className="display-6" id="cdt-minutes" />
                                    </div>
                                    <div className="col-3">
                                        <h1 className="display-6" id="cdt-seconds" />
                                    </div>
                                </div>
                                <Link className="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Deal