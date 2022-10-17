import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const DownloadCard = ({
                        title,
                        img,
                        description,
                        externalUrl,
                        internalUrl,
                        onClick
                      }) => {
  const navigate = useNavigate();

  if (__DEV__) {
    if (!internalUrl) {
      console.warn('DownloadCard should have internalUrl prop');
    }
  }

  const renderImage = () => {
    if (!img) return null;

    return <div className={'downloads__item__figure'}><img src={img}
                                                           alt={'card'}
                                                           className={'downloads__item__figure__image'}/>
    </div>;
  };

  const renderDescription = () => {
    if (!description) return null;

    return <p className={'downloads__item__description'}>{description}</p>;
  };

  const renderShare = () => {
    if (!externalUrl) return null;

    return <a href={externalUrl} className={'downloads__item__share'}><i
      className={'fa fa-share'}></i></a>;
  };

  const handleClick = () => {
    if (!__DEV__) {
      if (!internalUrl) return null;
    }

    if (onClick) onClick();

    return /http/.test(internalUrl) ? (window.location.href = internalUrl) : navigate(internalUrl);
  };

  return (
    <article className={'downloads__item'} onClick={handleClick}>
      {renderImage()}
      <h1 className={'downloads__item__header'}>
        {title}
      </h1>
      {renderDescription()}
      {renderShare()}
    </article>
  );
};

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  externalUrl: PropTypes.string,
  internalUrl: PropTypes.string,
  onClick: PropTypes.func,
};

export default DownloadCard;
