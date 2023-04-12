import { Svg, Circle } from 'react-native-svg';
const Circulo = ({ porcentaje }) => {
    const radio = 50; 
    const circunferencia = 2 * Math.PI * radio; 
    const porcionLlena = porcentaje * circunferencia / 100;
    
    return (
      <Svg width="100%" height="100%" viewBox="-5 -5 110 110" style={{position: 'absolute', transform: [{rotate: '-90deg'}]}}>
        <Circle cx="50" cy="50" r={radio} fill="none" strokeWidth="9" stroke="#eee"/>
        <Circle cx="50" cy="50" r={radio} fill="none" strokeWidth="9" stroke="#798BB2" strokeDasharray={circunferencia} strokeDashoffset={circunferencia - porcionLlena} strokeLinecap="round" />
      </Svg>
    );
  };
  export default Circulo;
  