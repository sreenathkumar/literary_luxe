'use client'
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../shadcn/carousel";
import BookCard from "./BookCard";

interface BookCarouselProps {
    books: any[]
}

function BookCarousel({ books }: BookCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true, stopOnFocusIn: true })
    )
    return (
        <Carousel className="w-full max-w-xs px-4 md:max-w-full" plugins={[plugin.current]}>
            <CarouselContent>
                {
                    books.map((book, index) => (
                        <CarouselItem className="md:basis-1/3 lg:basis-1/5" key={index}>
                            <BookCard title={book.title} img={book.book_image} author={book.author} url={book.amazon_product_url} />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}

export default BookCarousel