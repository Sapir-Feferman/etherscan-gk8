import './searchbox.css';

const Searchbox = ({ submitHandler, onChangeHandler, errorMsg, onKeyPress }) => {
    return (
        <>
            <div className='searchbox'>
                <input
                    className='userInput'
                    type={'search'}
                    placeholder='Ethereum address'
                    onChange={onChangeHandler} 
                    onKeyDown={onKeyPress}/>
                <button type="submit" onClick={submitHandler}>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
            <div className='errorMsg'>
                {errorMsg}
            </div>
        </>
    );
}

export default Searchbox;