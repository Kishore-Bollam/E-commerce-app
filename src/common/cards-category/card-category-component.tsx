import { Button, Card } from "react-bootstrap";
import { cardCategoryConfig } from "./card-category-config";
import "./card-category.css"
const cardCategory = () =>{
  

    return(
        <div>

       
        <h1>Products Category</h1>
       <div className="conatiner category-list">
     
        {cardCategoryConfig.map((card) =>
         <Card>
         <Card.Img variant="top" src={card.cardImageSrc} />
         <Card.Body>
           <Card.Title>{card.cardTitle}</Card.Title>
           <Card.Text>{card.cardDescription}</Card.Text>
           <Button variant="primary">Go to Products</Button>
         </Card.Body>
       </Card>

        )}
       </div>
       </div>
    )
}
export default cardCategory;