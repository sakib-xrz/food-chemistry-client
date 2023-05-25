/* eslint-disable react/prop-types */
const MenuItem = ({img, title, price, description}) => {
    return (
        <>
            {/* for large device */}
            <div className="hidden lg:flex items-center gap-4 p-3 lg:col-span-6">
                <img
                    className="w-[7.25rem] h-[6.5rem] object-cover menu-image"
                    src={img}
                    alt=""
                />
                <div>
                    <div className="flex items-center justify-between">
                        <h4 className="uppercase text-lg">
                            {title} ------------------
                        </h4>
                        <h4 className="text-primary text-lg">${price}</h4>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

            {/* for small and medium device */}
            <div className="lg:hidden flex col-span-12 gap-4 p-3 md:col-span-6">
                <img
                    className="w-[7.25rem] h-[6.5rem] object-cover menu-image"
                    src={img}
                    alt=""
                />
                <div>
                    <h4 className="uppercase text-lg font-semibold">{title}</h4>
                    <p>{description.slice(0,45)}...</p>
                    <h4 className="text-primary text-lg">${price}</h4>
                </div>
            </div>
        </>
    );
};

export default MenuItem;