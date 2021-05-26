import React from 'react'
import { useHistory, useParams } from "react-router";

const PurchaseItem = ({location:{state: {Price, ID}}}) => {
console.log(Price)
console.log(ID)
    // const [shop, setShop] = React.useState([]);
    
    const history = useHistory();
  
    // useEffect(() => {
    //   fetch("/PurchaseItem/" + ID)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setShop(data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);


    return (
        <div>
            <h2>Purchased</h2>





        </div>
    )
}

export default PurchaseItem
