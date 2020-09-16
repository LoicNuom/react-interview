import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'


/* TODO: need styling as you please*/

class Tag extends React.Component {
  render() {
    return (
      <span className={cx('column')}>
        {this.props.tag}
      </span>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag