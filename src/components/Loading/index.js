import gif from '../../assets/white.gif'
import './Loading.css'

const Loading = () => {
    return (
        <>
            <div className="loading">
                <img className='loading-img' src={gif} />
            </div>
        </>
    )
}

export default Loading