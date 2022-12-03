import React from 'react'
import { img_300, unavailable } from '../../config/config';
import './SingleContent.css'
import Badge from '@material-ui/core/Badge';
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({ id, title, poster, media_type, date, vote_average }) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'secondary'} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className='title'>{title}</b>
            <span className='sunTitle'>
                {media_type === 'tv' ? 'TV SERIES' : 'MOVIE'}

            </span>
            <span className='sunTitle'>{date}</span>
        </ContentModal>
    )
}

export default SingleContent
