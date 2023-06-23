import { Transaction } from 'components/TransactionHistory/Transaction/Transaction'
import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {

return(

<div className={css.wrapper}>

<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.tableHeader}>Type</th>
      <th className={css.tableHeader}>Amount</th>
      <th className={css.tableHeader}>Currency</th>
    </tr>
  </thead>
  <tbody>

{items.map( ({ id, type, amount, currency }) => (

<Transaction
  key={id} 
  type={type}
  amount={amount}
  currency={currency}
  />   
  )

)}
  </tbody>
  </table>
</div>
)
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,}
  ))
}
