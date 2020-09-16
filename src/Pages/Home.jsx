import React,{useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Filter from "../Components/Filter/Filter"
import ArticleCard from "../Components/ArticleCard/ArticleCard"

class Home extends React.Component {
  state = {
    tagList: [],
    selectedTags:[]
  }

  componentDidMount(){
    /* TODO: get list of Tags from API */



    /*TODO: get list of Articles from Database */
  }
  
  handleFilterChange(){
    /* TODO: Show only the articles with the selected tags */
  }

  render() {
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
