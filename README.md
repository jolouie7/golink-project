# GoLink Project

Time spent: 2hour 30minutes

I got to this project very late and was worried I would not be able to submit it. I couldn't code for a couple of days due to getting my covid vaccine. In hind sight I should have managed all my take home projects better.

### Installation

#### Clone project

```
git clone git@github.com:jolouie7/golink-project.git
```

#### Change in the directory
```
cd golink-project
```

#### open in your code editor
```
code .
```

#### install dependencies
```
npm install
```

#### run
```
npm start
```

technologies used:
- Reactjs
- React Router

## Improvements
- [ ] Add tests
  - I normally like to add integration tests to make sure everything is work correctly. I also don't want to keep manaually testing my app.
- [ ] Improve styling
  - I have little to no styling. I was thinking of using react bootstrap but I didn't want to import it just to style my cards
- [ ] Add infinite scroll or pagination
  - I was originally going to add infinite scroll but the API only returns 30 entries.
- [ ] Add better accessibility
  - In my cards I list everything using a div, which isn't good for search engines / scrapers

Bonus:
- For the bonus I would have a input field so the user can type in the org they want with a little bit of validation. I would store what they typed in state so I can reference it in my app. I would use template strings instead of hardcoding Netflix in my fetch requests.

Closing thoughts: I enjoyed the project. This is one of the very few cases where I was given an API to work with. I liked how I had to go and read the Github API docs in order to get the commits I want. Googling also helped a lot too.