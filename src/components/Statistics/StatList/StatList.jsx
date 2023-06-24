import css from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types';
import { StatItem } from '../StatItem/StatItem';


export const StatList = ({ title, stats }) => {
    return (

      <section className={css.statistics}>

        {title && <h2 className={css.title}>{title}</h2>}

          <ul className={css.statList}>

            {stats.map( ({ id, label, percentage })  => (    
            < StatItem
             key={id}
             label={label}
             percentage={percentage}
             />
             
            ))}
          </ul>
      </section>   
  )
}

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired})),
} 

