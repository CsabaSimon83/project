import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import BookCard from "./BookCard";

function Find() {
    const [Listing, setListing] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);

    const handleSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handlePageIncrementValueChange = () => {
        const totalPage = total % 10 === 0 ? total / 10 : Math.floor(total / 10) + 1
        if (page < totalPage) {
            setPage(page + 1);
        }
    }

    const handlePageDecrementValueChange = () => {
        if (page !== 1) {
            setPage(page - 1);
        }

    }

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`https://api.itbook.store/1.0/search/${searchValue}/${page}`);
            const json = await response.json();
            setTotal(json['total']);
            setListing(json['books']);
        };

        if (searchValue.length > 0) {
            fetchData(searchValue);
        }
    }, [searchValue,page]);

    if (Listing.length !== 0) {
        return (
            <Container>
                <div style={{'display': 'flex', 'justify-content': 'space-between'}}>
                    <div className={'title'}>
                        FIND YOUR BOOKS
                        <div className={'text-muted'} style={{'font-size':'0.8rem'}}>searched for: <b>"{searchValue}"</b> page: <b>{page}</b></div>
                    </div>

                    <div className={'title'} style={{'display': 'inherit', 'width': '30%'}}>
                    <img style={{'marginRight': '-25px', 'marginTop': '10px', 'zIndex': '1000'}}
                             src="icons/search-svgrepo-com.svg" width="15" height="15" alt="favorite"/>
                        <Form.Control
                            className={'search'}
                            type="text"
                            value={searchValue}
                            aria-describedby="search"
                            onChange={handleSearchValueChange}
                        />
                    </div>
                </div>

                <div className={'flex-find'}>
                    {Listing.map((book, index) => (
                        <BookCard key={book.isbn13} classValue={'flex-findBook'} imgUrl={book.image}
                                  price={'$' + Math.round(parseInt(book.price.replace('$', '')))} title={book.title}
                                  subtitle={book.subtitle}/>
                    ))}
                </div>
                <br/>
                <img src="icons/arrow-sm-left-svgrepo-com.svg" style={{'cursor':'pointer'}} onClick={handlePageDecrementValueChange} width="20" height="20" alt="decrement"/>
                <div
                    style={{'display': 'inline'}}> {page} / {total % 10 === 0 ? total / 10 : Math.floor(total / 10) + 1} </div>
                <img src="icons/arrow-sm-right-svgrepo-com.svg" style={{'cursor':'pointer'}} onClick={handlePageIncrementValueChange} width="20" height="20" alt="increment"/>
            </Container>
        );
    } else {
        return (
            <Container>
                <div style={{'display': 'flex', 'justify-content': 'space-between'}}>
                    <div className={'title'}>
                        FIND YOUR BOOKS
                    </div>
                    <div className={'title'} style={{'display': 'inherit', 'width': '30%'}}>
                        <img style={{'marginRight': '-25px', 'marginTop': '10px', 'zIndex': '1000'}}
                             src="icons/search-svgrepo-com.svg" width="15" height="15" alt="favorite"/>
                        <Form.Control
                            className={'search'}
                            type="text"
                            value={searchValue}
                            aria-describedby="search"
                            onChange={handleSearchValueChange}
                        />
                    </div>
                </div>
            </Container>
        )
    }
}

export default Find