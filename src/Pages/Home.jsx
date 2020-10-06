import React,{useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Filter from "../Components/Filter/Filter"
import ArticleCard from "../Components/ArticleCard/ArticleCard"

import {getAllTags} from '../mockAPI/allTags'
import {getAllArticles} from '../mockAPI/allArticles'

class Home extends React.Component {
  state = {
    tagList: [],
    selectedTags:[],
    articleList:[],
    articles:[]
  }

  componentDidMount(){
    getAllTags().then(tags=>{
      this.setState({tagList:[...tags]})
    })

    /*TODO: get list of Articles from Database */
    getAllArticles().then(articles=>{
      this.setState({articleList:articles})
    })

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
            <div className={cx("column")}>
              
                {
                  this.state.articleList.map((article, index) => 
                    <ArticleCard summary={article.text} title={article.title} image={article.image} key={index} tags={article.tags}  />
                  )
                }
            </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home
