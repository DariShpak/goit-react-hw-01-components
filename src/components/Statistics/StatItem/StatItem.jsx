import css from 'components/Statistics/Statistics.module.css'
import { colorPalette} from 'data/colorPalette.js';


export const StatItem = ({ label, percentage}) => {
  const hexColor = getRandomColor();
  return(
    <li className={css.item} style={{ backgroundColor: hexColor }}> 
        <span className={css.label}>{label}</span> 
        <span className={css.percentage}>{percentage}</span>
    </li>
  )
}

function getRandomColor() {
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  return randomColor;
}