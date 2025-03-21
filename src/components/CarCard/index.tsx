import './styles.css';
import carImg from '../../assets/car-card 1.png';

export default function CarCard(){
    return(
        <div className='ct-car-card-container'>
                <img src={carImg} alt="car-image" />
                <p>Lorem ipsum dolor</p>
        </div>
      
      

    );


}

