import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Select from 'react-select'
import {capitalize} from 'lodash'


class Filter extends React.Component {
  render() {
    const options = this.props.tagList.map(tag=>({ value: tag, label: capitalize(tag)}))
    return (
      <Select name='tagFilter' value={this.props.selectedTags} options={options} onChange={this.props.onChange} multi autoBlur />
    );
  }
}

Filter.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string),
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default Filter