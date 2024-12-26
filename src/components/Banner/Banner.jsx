import banner from "../../assets/images/banner.jpg";
const Banner = () => {
    return (
        <div
            className="hero rounded-3xl min-h-[500px] bg-cover bg-center"
            style={{
                backgroundImage: `url("${banner}")`,
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-2/3 mx-auto">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="btn btn-warning">Explore Now</button>
                        <button className="btn btn-success">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;