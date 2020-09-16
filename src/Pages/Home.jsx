import React,{useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Filter from "../Components/Filter/Filter"
import ArticleCard from "../Components/ArticleCard/ArticleCard"

import {getAllTags} from '../../mockAPI/allTags'

class Home extends React.Component {
  state = {
    tagList: [],
    selectedTags:[]
  }

  componentDidMount(){
    getAllTags().then(tags=>{
      const tagsNames = tags.maps(tag=>tag.name)
      console.log(tagsNames)
      this.setState({tagList:[...tagsNames]})
    })


    /*TODO: get list of Articles from Database */
  }
  
  handleFilterChange(){
    /* TODO: Show only the articles with the selected tags */
  }

  render() {
    console.log(this.state.tagList)
    return (
      <div className={cx("container")}>
        <section className={cx("section")}>
          <Filter onChange={this.handleFilterChange} tagList={this.state.tagList} selectedTags={this.state.selectedTags}/>
        </section>
        <section className={cx("columns","section")}>
          {
            /*TODO: Create a list of the cards, the list has to be reactive */
            <div className={cx("column")}>
              <ArticleCard />
            </div>
          }
        </section>
        
      </div>
    );
  }
}

Home.propTypes = {
  
};

export default Home
