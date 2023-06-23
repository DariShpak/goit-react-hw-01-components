import css from 'components/TransactionHistory/TransactionHistory.module.css'


export const Transaction = ({ type, amount, currency }) => {
return(

<tr>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
</tr>

)
}