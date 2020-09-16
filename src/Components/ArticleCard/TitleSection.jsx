import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class TitleSection extends React.Component {
  render() {
    return (
      <div className={cx('card')}>
        <h1 className={cx('title')}>

        </h1>
        <p className={cx('columns', 'is-multiline')}>
          //TODO: Show tags
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