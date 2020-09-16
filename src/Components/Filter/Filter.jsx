import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Select from 'react-select'



class Filter extends React.Component {
  render() {
    return (
      <Select name='tagFilter' value={this.props.selectedTags} options={this.props.tagList} onChange={this.props.onChange} multi autoBlur />
    );
  }
}

Filter.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string),
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default Filter