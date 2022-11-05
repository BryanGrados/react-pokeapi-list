const LoadingLayout = ({ loading }) => {
    return (
        <>
            {
                loading &&
                <div className='fixed opacity-80 h-full top-0 bg-slate-800 flex items-center justify-center w-full text-center text-white rounded-lg'>
                    <h1 className='text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-500 via-orange-400 to-yellow-500'>Loading...</h1>
                </div>
            }
        </>

    )
}

export default LoadingLayout;