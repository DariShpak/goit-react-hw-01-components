import css from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types'


export const StatList = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.statList}>
            {stats.map( ({ id, label, percentage })  => (    
            (<li key={id} className={css.item}>
               <span className={css.label}>{label}</span> 
               <span className={css.percentage}>{percentage}</span>
            </li>)))}
          </ul>
      </section>   
  )
}

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape(
    {label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,})),

} 
