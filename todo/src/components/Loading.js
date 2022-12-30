import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="spinner-border text-dark position-absolute top-50 start-50" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}

export default LoadingSpinner;
