import { } from "react";


const Card = (props: any) => {
return (
  <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
    <img alt= 'robots' src='https://robohash.org/Johndoe?200x200' />
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  </div>
  );
}

export default Card;