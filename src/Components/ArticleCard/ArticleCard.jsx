import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Summary from './Summary'
import TitleSection from './TitleSection'

class ArticleCard extends React.Component {

  handleClick(){
    /* TODO: Go to the article page on click, you should use React Router*/
  }

  render() {
    return (
      <div className={cx('card')} onClick={this.handleClick}>
        <div className={cx('card-content')}>
          <div className={cx('media')}>
            <div className={cx('media-left')}>
              <figure className={cx('image')}>
                {/* TODO:  show the image*/}
                <img src={'ImageUrl'} alt="Image Description" />
              </figure>
            </div>
            <div className={cx('media-content')}>
              {/* TODO: pass the article details (title and tags)*/}
              <TitleSection title={'Article Title'} tags={[]}/>
            </div>
          </div>
          <div className={cx('content')}>
            {/*TODO: Pass the article text and the max length. Max length can be taken from a config or to be respond to size*/}
            <Summary text={'Article text'} maxLength={150}/>
          </div>
        </div>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  image: PropTypes.string
};

export default ArticleCard