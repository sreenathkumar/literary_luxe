import React from 'react'
import BookCarousel from './ui/BookCarousel'
import getBestSeller from '@/actions/api/getBestSeller';

async function BestSellingBooks() {
    const { data: books } = await getBestSeller();

    return (
        <>
            {
                (books && books?.length > 0) ? <BookCarousel books={books} /> : <p className='text-red-500 font-semibold text-xl'>No such books</p>
            }
        </>
    )
}

export default BestSellingBooks