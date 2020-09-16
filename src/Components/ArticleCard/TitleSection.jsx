import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Tag from './Tag'

class TitleSection extends React.Component {
  render() {
    return (
      <div className={cx('card')}>
        <p className={cx('title')}>
            Title
        </p>
        <p className={cx('columns', 'is-multiline')}>
          {
            /* TODO:  Show the list of tags*/
          }
        </p>
      </div>
    );
  }
}

TitleSection.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default TitleSection