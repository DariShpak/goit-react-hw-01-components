import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
return(

<tr>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
</tr>
)
}

Transaction.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.string.isRequired,
   currency: PropTypes.string.isRequired
}