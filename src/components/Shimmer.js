const ShimmerCard = () => {
    return (
        <div className='w-64 max-w-60 h-80 flex-grow p-2 rounded-md bg-gray-500'>
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between items-center py-2">
                <span className="h-6 w-32 rounded-md bg-gray-400"></span>
                <button className="bg-gray-400 h-6 w-10 rounded-md"></button>
            </div>
            <span className="inline-block h-6 w-full rounded-md bg-gray-400"></span>
        </div>
    );
}

const Shimmer = () => {
    let arr = [];
    for(let i=0; i<20; i++) {
        arr.push(<ShimmerCard key={i} />);
    }
    return arr;
}

export default Shimmer;