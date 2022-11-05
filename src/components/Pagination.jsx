export default function Pagination({ gotoNextPage, gotoPrevPage, index }) {

    const indexNumber = parseInt(index) + 20;

    return (
        <div className='flex items-center justify-center w-full h-16 space-x-10 text-center text-white rounded-lg bg-zinc-600'>
            {
                gotoPrevPage &&
                <button className='flex items-center justify-center h-10 p-3 m-2 font-bold text-white bg-red-500 rounded-lg' onClick={gotoPrevPage}>Prev</button>
            }
            <span className='flex items-center justify-center w-8 h-8 p-3 m-2 font-bold text-white text-xs bg-red-500 rounded-full'>{index[0]}</span>
            <span className='flex items-center justify-center w-8 h-8 p-3 m-2 font-bold text-white bg-red-500 rounded-full text-xs'> ... </span>
            <span className='flex items-center justify-center w-8 h-8 p-3 m-2 font-bold text-white text-xs bg-red-500 rounded-full'>{indexNumber}</span>
            {
                gotoNextPage &&
                <button className='flex items-center justify-center h-10 p-3 m-2 font-bold text-white bg-red-500 rounded-lg' onClick={gotoNextPage}>Next</button>
            }
        </div>
    )
}