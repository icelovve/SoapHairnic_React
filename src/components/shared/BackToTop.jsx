/* eslint-disable jsx-a11y/anchor-is-valid */
const BackToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };
    return (
        <div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top" onClick={handleScrollToTop}><i className="bi bi-arrow-up" /></a>
        </div>
    )
}

export default BackToTop