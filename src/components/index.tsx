import { useState } from 'react'
import './styles.css'
import { FaStar } from "react-icons/fa";
type IndexProps = {

    numberOfStars: number

}

const Index = ({numberOfStars}:IndexProps) => {

    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number>(0)

    const handleClick = (getIndex:number) => {

        setRating(getIndex)

    }

    const handleMouseOver = (getIndex:number) => {

        setHover(getIndex)

    }

    const handleMouseLeave = () => {

        setHover(rating)

    }


    return(

        <>

            <div className='star-rating'>

                {

                    [...Array(numberOfStars)].map((_,index) => {
                        index += 1

                        return <FaStar key={index}
                        onClick={() => handleClick(index)}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        className={`starStyle ${index <= (hover || rating) ? 'active' : 'inactive'}`}></FaStar>

                    })

                }

            </div>

        </>

    )

}

export default Index