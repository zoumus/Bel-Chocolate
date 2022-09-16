
import noodleBowl from "../../assets/feature-pics/feature2.png";

const Checkout = () => {

    const closeModal = () => {
        // let modal = document.getElementById("checkout-modal");
        // modal.style.display = "none";
        // let bg = document.getElementById("checkout-modal-background");
        // bg.style.display = "none";
    }

    return (
        <>
            <div id="checkout-modal-background"></div>
            <div id="checkout-modal">
                <div id="close-checkout-modal" className="fa-solid fa-x" onClick={closeModal}></div>
                <h1 id="checkout-message">Thank you for your purshase.</h1>
                <h2 id="checkout-text"> This page will be a real checkout page in the future.</h2>
            </div>
        </>
    )
}

export default Checkout;