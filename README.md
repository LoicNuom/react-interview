# Nuom Front-end Exercise

**This Project is for you to demonstrate your capacity to create a small web app. Make sure to read the instructions _all the way through_ before starting.**

[Read these instructions more easily on gihub](https://github.com/LoicNuom/react-interview/blob/master/README.md)

[Access the exercise on Stackblitz](https://stackblitz.com/edit/react-h6wj4b?file=README.md)

### How to use this platform
We are using **Stackblitz** which is an online in-browser IDE. [learn more](https://www.youtube.com/watch?v=_5VNrYFUv1U).

You are expected to fork this repository, (see top right of this screenshot) and link it to your personal GitHub for safekeeping.

![Fork](https://i.imgur.com/BS2OJQ9.png)

You can then use your own workspace to complete this project.

Once you are complete, commit the project to your GitHub and set Freeze Project in the settings 
![Freeze](https://i.imgur.com/IYn8LDW.png)

The last step is to share your project with us for review:
![Share](https://i.imgur.com/w7T9Sm4.png)

### What is expected of your
You are expected to complete the code wherever there is a **TODO** comment.

![TODO exemple](https://i.imgur.com/dXVFiOk.png)

You are free to add any libraries you want.

Also, you are free to change any of the existing code.

## What does this app do
This add calls a Firebase firestore backend to get a list of articles and display them as summary cards. Users can then select one or multiple tags to filter the articles.



## Tasks
There are 8 TODO tasks to complete:

1. **Fetching Database data:** do the TODO in files *mockAPI/allArticles.js* and *src/Pages/Home.jsx* to get the articles from the database to the react components.

2. **Show the list of Articles components** in *src/Pages/Home.jsx*. It will have to be shown in a long list that has to be reactive, meaning the display update when the list change due to filtering or other. 
It also has to be responsive, and the layout change depending on the users' display size. The expected results are that it shows: *3 Articles per row on large screen*, *2 Articles per row on medium screen (tablet)*, and *1 Article per row on small screen (mobile)*
It is recommended to use [Bulma](https://bulma.io/documentation/columns/responsiveness/) but you can use any library you want. You can use any breakpoint value you feel appropriate, or use the default one from Bulma.

3. **Show the _image_, _title_, and _summary_** in *src/Components/ArticleCard/Article.jsx*. for that you will have to do the TODO in *Summary.jsx* and *TitleSection.jsx* in the *ArticleCard* folder 

4. **Style tags on card and display them** in *src/Components/ArticleCard/Tag.jsx* you can use any library you like for the styling (*Plain CSS*, *style-components*, *CSS-in-JS*, *(S)CSS modules*, *Styled jsx*, etc...). Don't be affraid to be Creative!

5. **Truncate article text** in *src/Components/ArticleCard/Summary.jsx* to a max length. It is your choice to decide how the max length should be decided.

6. **Update the _selectedTags_ list** when the values in the _Filter_ component change. You shouldn't have to change anything into *src/Components/Filter/Filter.jsx* but feel free to do so if you want to improve it. 

7. **Filter article list based** on selected tags. It is expected to show every article if no tags are selected but only articles with at least one of the selected tag when the list is not empty.

8. **Going to the article page when clicking on the _ArticleCard_** It is not expected to implement the Article page but just to navigate to the page using React-Router.

#### Bonus tasks:

- Do the filtering "server-side" by changing the calls to the database rather than just filtering the javascript array
- Implement sorting of the articles. Let the user choose between sorting by Date, Title, etc...
- Implement filter by words to search for words within the articles
- Change the styling to use Tailwind instead of Bulma
- Implement the article page to display the article content

#### You can even go above and beyond:

- Connect your own Firebase project to implements functionalities, such as authentication, articles ratings, comments, etc...


## UI mockup

The final result is expected to be similar to the mockup below. Of course, you are free to show your creativity by improving on this basic design.

![App Mockup](https://i.imgur.com/nEnqeUu.png)
