import './widgetLg.css'

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Rod</span>
          </td>
          <td className="widgetLgDate">30 Jul 2022</td>
          <td className="widgetLgAmount">$110,00</td>
          <td className="widgetLgStatus"><Button type='Approve'/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Rod</span>
          </td>
          <td className="widgetLgDate">30 Jul 2022</td>
          <td className="widgetLgAmount">$110,00</td>
          <td className="widgetLgStatus"><Button type='Decline'/></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetLgImg" />
            <span className="widgetLgName">James Rod</span>
          </td>
          <td className="widgetLgDate">30 Jul 2022</td>
          <td className="widgetLgAmount">$110,00</td>
          <td className="widgetLgStatus"><Button type='Pending'/></td>
        </tr>
      </table>
    </div>
  )
}
