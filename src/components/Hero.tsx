import Banner from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <section className="  bg-white py-16 md:py-20">
            <div className="mx-auto flex max-w-7xl flex-col justify-between items-center gap-10 px-6 md:px-10 lg:flex-row lg:px-12">
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl " > Build Your Ideal{" "}
                        <span className="bg-linear-to-r from-[#FF5722]
                         via-[#D81B7E] to-[#7C3AED] bg-clip-text 
                        text-transparent">Development Stack</span></h1>
                    <p className="mt-5 text-base leading-7 text-[#475569] md:text-lg">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <button className=" bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 py-3 font-medium text-white">Explore Technologies</button>
                        <button className="rounded-2xl border border-[#E5E7EB] px-6 py-3 font-medium">Learn More</button>
                    </div>
                </div> 
                <div className="w-full max-w-lg">
                    <img src={Banner} alt="Image"/>
                </div>


            </div>
        </section>
    );
};

export default Hero;