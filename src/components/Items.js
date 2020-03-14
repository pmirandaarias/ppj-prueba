import React from 'react';
import NumberFormat from 'react-number-format';
import { FaCartPlus } from 'react-icons/fa';
import { Button} from "react-bootstrap";

const Items = (props) => {
    const { items, addToCart } = props;

    const handleClick = (id, price) => addToCart(id, price);

    if (items && items.length >0 ){
      return items.map(item => {

        // Simulación del precio, a partir de data que viene en cada item
        const price =
            item.release.au ? parseInt(item.release.au.split('-')[2])*1000 + 10990 :
              item.release.eu ? parseInt(item.release.eu.split('-')[2])*1000 + 10990 :
                item.release.jp ? parseInt(item.release.jp.split('-')[2])*1000 + 10990 :
                  item.release.na ? parseInt(item.release.na.split('-')[2])*1000 + 10990 : 10990;

        return <div className="card card-container" key={item.tail}>
          <div className="card-image">
            <img src={item.image} alt={item.name} className="img-item"/>
          </div>
          <div className="card-info">
            <ul className="list">
              <li>Nombre: <span className="item-name">{item.name}</span></li>
              <li>Tipo: {item.type}</li>
              <li><b>Precio: <NumberFormat value={price} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'$'} /></b></li>
            </ul>
          </div>
          <div className="card-add">
            <Button variant="primary" size="sm" block onClick={() => handleClick(item.tail, price)}>
              <FaCartPlus />
              <span className="bi-cart">Agregar al carro</span>
            </Button>
          </div>
        </div>
    });
    }


    else return (<></>);
};

export default Items;
