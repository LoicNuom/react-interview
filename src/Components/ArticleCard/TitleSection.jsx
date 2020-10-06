import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Tag from './Tag'

let tags = {}

class TitleSection extends React.Component {

  render() {

    function tagsList(tags) {
      console.log(tags);
      const tagItems = Object.values(tags).map((tag, index) =>
        <span>
          { tag }&nbsp;
        </span>
      );
      return (
        <div>{tagItems}</div>
      );
    }
    return (
      <div className={cx('card')}>
        <p className={cx('title')}>
            {this.props.title}
        </p>
        <p className={cx('columns', 'is-multiline')}>
          {tagsList(this.props.tags)}
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