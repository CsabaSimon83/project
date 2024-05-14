import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import BookCard from "./BookCard";

function NewReleases() {
    const [Listing, setListing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.itbook.store/1.0/new');
            const json = await response.json();
            setListing(json['books']);
        };

        fetchData();
    }, []);

    if (Listing.length !== 0) {
        return (
            <Container>
                <div className={'title'}>
                    NEW RELEASES
                </div>
                <div className={'flex-newRelease'}>
                    {Listing.map((book, index) => (
                        <BookCard key={book.isbn13} classValue={'flex-book'} imgUrl={book.image} price={'$'+Math.round(parseInt(book.price.replace('$','')))} title={book.title} subtitle={book.subtitle}/>
                    ))}
                </div>
            </Container>
        );
    } else {
        return (
            <Container>
                <div className={'title'}>
                    NEW RELEASES
                </div>
            </Container>
        )
    }
}

export default NewReleases