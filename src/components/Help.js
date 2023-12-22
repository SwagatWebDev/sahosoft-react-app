import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import UserContext from "../utils/UserContext";
import {findNthPrime} from "../utils/helper";

const Help = () => {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Inside set Interval componentDidMount called");
    //     }, 1000);
    //     console.log("useEffect called");
    //     // Used for unmounting phase
    //     return () => {
    //         clearInterval(timer);
    //         console.log("useEffect return called");
    //     };
    // }, []);

    const {loggedInUser} = useContext(UserContext);
    const [text, setText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const [textValue, setTextValue] = useState(0);
    const [isDark, setIsDark] = useState(false);
    // const nthPrimeNumber = findNthPrime(text);

    const nthPrimeNumber = useMemo(() => findNthPrime(text), [text]);

    const nthPrimeCallback = useCallback(() => {
        // console.log("Calculate Prime Number of", textValue)
        return findNthPrime(textValue);
    }, [textValue])

    let x = 0;
    const [y, setY] = useState(0);
    console.log("value of y is", y);

    const ref = useRef(0);

    console.log("render called");
    return (
        <div className="help-page p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Welcome to Foodies Customer Support</h1>
            <p className="text-lg">
                If you have any questions or need assistance, our customer support team is here to help you.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p>
                    You can reach us via email at <strong className="text-green-600">support@foodies.com</strong> or by
                    phone at{" "}
                    <strong className="text-green-600">+1 (123) 456-7890</strong>.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions (FAQs)</h2>
                <ul className="list-disc list-inside">
                    <li className="text-lg">How do I place an order?</li>
                    <li className="text-lg">What payment methods are accepted?</li>
                    <li className="text-lg">How can I track my order?</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold mb-2 mt-8">useMemo, useCallback and useRef Hooks in React</h2>
            <div className="flex">
                <div className={"m-4 p-2 w-96 h-96 border border-black text-center text-black"
                    + (isDarkTheme && "mt-1 bg-blue-700")}>
                    <p className="font-bold">Memorization Example(useMemo)</p>
                    <button className="m-10 p-2 bg-green-500 rounded-lg cursor-pointer"
                            onClick={() => {
                                console.log("Button Clicked")
                                return setIsDarkTheme(!isDarkTheme)
                            }
                            }>
                        Toggle Theme
                    </button>
                    <div>
                        <input
                            className="border border-black w-72 px-2"
                            type="number"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div>
                        <h1 className="mt-4 font-bold text-lg">nth Prime: {nthPrimeNumber}</h1>
                    </div>
                </div>
                <div>
                    <div className={"m-4 p-2 w-96 h-96 border border-black text-center text-black"
                        + (isDark && "mt-1 bg-amber-950")}>
                        <p className="font-bold">Memorization Example(useCallback)</p>
                        <button className="m-10 p-2 bg-green-500 rounded-lg cursor-pointer"
                                onClick={() => {
                                    console.log("Button Clicked")
                                    return setIsDark(!isDark)
                                }
                                }>
                            Toggle Theme
                        </button>
                        <div>
                            <input
                                className="border border-black w-72 px-2"
                                type="number"
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                            />
                        </div>
                        <div>
                            <h1 className="mt-4 font-bold text-lg">nth Prime: {nthPrimeCallback()}</h1>
                        </div>
                    </div>
                </div>
                <div className="m-4 p-2 w-96 h-96 border border-black text-center text-black">
                    <p className="font-bold">useRef Example</p>
                    <div>
                        <button className="m-10 p-2 rounded-lg cursor-pointer bg-green-500"
                                onClick={() => {
                                    x = x + 1;
                                    console.log("Button Clicked, value of x is", x);
                                }}>
                            Increase x
                        </button>
                        <span className="font-bold text-lg">Let x = {x}</span>
                    </div>
                    <div>
                        <button className="m-10 p-2 rounded-lg cursor-pointer bg-green-500"
                                onClick={() => {
                                    setY(y + 1);
                                }}>
                            Increase y
                        </button>
                        <span className="font-bold text-lg">State = {y}</span>
                    </div>
                    <div>
                        <button className="m-10 p-2 rounded-lg cursor-pointer bg-green-500"
                                onClick={() => {
                                    ref.current = ref.current + 1
                                    console.log("value of ref", ref.current)
                                }}>
                            Increase Ref
                        </button>
                        <span className="font-bold text-lg">Ref = {ref.current}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
