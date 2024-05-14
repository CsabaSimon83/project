function BookCard({classValue, imgUrl, title, subtitle, price}) {
    return (
        <div className={classValue}>
            <img className={'bookImage'} src={imgUrl} alt="book"/>
            <div style={{'height':'100%'}}>
                <div className={'priceCircle'}>{price}</div>
                <div className={'bookTitle'}>{title}</div>
                <div className={'bookSubtitle text-truncate'}>{subtitle || ' '}</div>
            </div>
        </div>
    )
}

export default BookCard;