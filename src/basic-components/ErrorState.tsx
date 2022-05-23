import React from "react";


const ErrorState: React.FC = () =>
    (
        <React.Fragment>
            <div className="flex flex-col justify-center items-center text-4xl font-extrabold dark:text-white">
            <span className="bg-clip-text text-transparent text-gray-600">
              Error loading offers!
            </span>
            </div>
        </React.Fragment>
    )

export default ErrorState;