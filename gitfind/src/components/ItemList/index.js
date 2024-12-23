import './styles.css'

const ItemList = ( {title, description} ) => {
    return (
        <div className='item-list'>
            <h3>{title}</h3>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default ItemList;
  