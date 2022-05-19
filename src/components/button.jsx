function Button({onClick, children}) {
    return ( <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700 m-2" onClick={onClick}>
{children}
    </button> );
}

export default Button;