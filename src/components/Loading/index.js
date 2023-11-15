import Title from '../Title'
import gif from '../../assets/white.gif'
import './Loading.css'

const Loading = ({title}) => {
    return (
        <>
            <Title title={title} />
            <div className="loading">
                <img className='loading-img' src={gif} />
            </div>
        </>
    )
}

export default Loading