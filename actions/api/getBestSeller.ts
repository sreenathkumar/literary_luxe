'use server'

import { getUniqueBooks } from "@/lib/utils";

const getBestSeller = async () => {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.BEST_SELLER_API_KEY}`, {
            cache: 'no-store',
        });

        const data = await response.json();
        const weeklyList = data?.results?.lists
        const weeklyBestBooks = getUniqueBooks(weeklyList);
        return {
            status: 'suceess',
            data: weeklyBestBooks
        }
    } catch (error) {
        console.log(error);
        return {
            status: 'error',
            data: []
        }
    }
}

export default getBestSeller