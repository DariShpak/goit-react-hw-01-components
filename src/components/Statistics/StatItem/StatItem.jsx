import css from 'components/Statistics/Statistics.module.css'

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
  const colorPalette = ["#667b68", "#5f9ea0", "#a3c1ad", "#a0d6b4","#fceee9", "#dde6d5","#b88c8c", "#ddadad", "#8caba8", "#aec8ce", "#dfdfde", "#a2798f", ];
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  return randomColor;
}