'use server'

const getBestSeller = async () => {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.BEST_SELLER_API_KEY}`, {
            cache: 'no-store',
        });

        const data = await response.json();
        const weeklyList = data?.results?.lists
        const weeklyBestBooks = weeklyList.map((list: any) => {
            return list.books.slice(0, 2);
        })

        return {
            status: 'suceess',
            data: [].concat(...weeklyBestBooks)
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