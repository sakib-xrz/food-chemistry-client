/* eslint-disable react/prop-types */
const ButtonPrimary = ({ children }) => {
    return (
        <button className="border-2 border-l-0 border-r-0 border-transparent border-b-neutral text-neutral font-medium py-2 px-6 rounded-md transition-all hover:bg-neutral hover:text-primary">
            {children}
        </button>
    );
};

export default ButtonPrimary;
