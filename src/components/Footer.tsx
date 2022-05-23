import React from "react";

const Footer: React.FC = () => (
    <footer
        className="mt-4 p-4 bg-transparent rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:transparent">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.sixt.de"
                                                                                        className="hover:underline">Sixt™</a>. All Rights Reserved.
    </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="src/components/Footer#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="src/components/Footer#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="src/components/Footer#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="src/components/Footer#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
)

export default Footer;