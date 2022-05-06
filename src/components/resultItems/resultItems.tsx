import ResultItem from "../resultItem/resultItem.tsx";
import './resultItems.css';

const ResultItems = ({ results, message }) => {
    if (!results) return null;
    return (
        <>
            {results.length > 0 ?
                <div className='searchResults'>
                    <table>
                        <thead>
                            <tr>
                                <th>TimeStamp</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Confirmations</th>
                                <th>Hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((item) => <ResultItem key={item.hash} resultItem={item} />)}
                        </tbody>
                    </table>
                </div> :
                <div className="searchResults noResults">{message}</div>}
        </>
    );
}

export default ResultItems;