const ResultItem = ({resultItem}) => {
    return (
        <tr>
            <td>{resultItem.timeStamp}</td>
            <td>{resultItem.from}</td>
            <td>{resultItem.to}</td>
            <td>{resultItem.value}</td>
            <td>{resultItem.confirmations}</td>
            <td>{resultItem.hash}</td>
        </tr>
    );
}

export default ResultItem;