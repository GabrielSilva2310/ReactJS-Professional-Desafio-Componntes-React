import './styles.css';
import carImg from '../../assets/car-card 1.png';

export default function CarCard(){
    return(
        <div className='ct-car-card-container'>
            <div className='ct-car-card-image'>
                <img src={carImg} alt="car-image" />
            </div>
            <div>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
      
      

    );


}

