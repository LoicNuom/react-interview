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
      this.setState({tagList:[...tags]})
    })


    /*TODO: get list of Articles from Database */

  }
  
  handleFilterChange(){
    /* TODO: update the selected tag list */

  }

  /* TODO: update the list of Articles when */

  render() {
    return (
      <div className={cx("container")}>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                The Great Article Database
              </h1>
            </div>
          </div>
        </section>
        <section className={cx("section")}>
          <h2 className={cx('subtitle')}>Filter by tag:</h2>
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
