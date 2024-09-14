import { useState, useEffect } from "react";
import logo from "/images/logo.svg";
export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div className="flex justify-between   pt-8 pb-10 items-center dark:bg-black">
           
            <img src={logo} alt="logo" className="" />

        
            <div className="flex items-center space-x-4">
                {/* select */}
                <select className="p-2 dark:bg-black dark:text-white   rounded">
                    <option value="serif">Serif</option>
                    <option value="sans-serif">Sans-serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="cursive">Cursive</option>
                    <option value="fantasy">Fantasy</option>
                </select>

                <span className="border-2 h-[20px]  border-solid "></span>

                <label htmlFor="check" className="bg-gray-100 
                cursor-pointer relative w-[40px] h-[20px] rounded-full">
                    <input
                        type="checkbox"
                        id="check"
                        className="sr-only peer"
                        onChange={changeTheme} 
                    />
                    <span className=" bg-rose-300
                     absolute rounded-full top-0 left-0 w-[20px] h-[20px]
                      peer-checked:bg-rose-600 peer-checked:left-5 transition-all duration-500"></span>
                </label>
            </div>
        </div>
    );
}
