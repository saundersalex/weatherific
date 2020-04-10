## Notes

**Please also see the separately-submitted Technical Design Document for a full design breakdown of Weatherific and more in-depth personal thoughts & comments not found in this README.**

### Date
This project was submitted to Thinkific on April 10th, 2020.

### Location of deployed application
The application is deployed on Netlify and available publicly at https://weatherific.netlify.app

### Time spent
I spent roughly 11-12 hours on this exercise. Roughly 4 hours was dedicated to research and writing a Technical Design Document which has been submitted alongside this project to Thinkific. Roughly 8 hours was spent actually developing the app, testing it, polishing it, and deploying it to the internet.

**Note:** More in-depth breakdowns of time spent on this exercise are available at the bottom of the submitted TDD where I kept a record of personal notes. I highly recommend checking it out.

### Assumptions made

I tried to keep assumptions to a minimum; however I did make the assumption that we were to **only** use the 5-day/3-hour weather forecast endpoint and none of OpenWeatherMaps other endpoints.

This meant that the app was only capable of showing forecast data that is in the future, but not the **current** weather conditions. I could have implemented more endpoints to fetch the present-time data, but opted to stick to the instructions as I assumed this was concious constraint of the exercise.


### Shortcuts/Compromises made

My biggest shortcut/regret in building this app was making the decision to re-query the OWM API when the user wanted to see temperatures in different units. Because the API itself will return precise temperatures by specifying what units you'd like the response in, I found it like an appealing option to go with initially. Upon getting the app to its current state, I wish I would have just made the conversions on the client, because my initial concerns about number precision ended up being irrelevant as I wound up rounding the dates anywhere they were displayed anyways.

Furthermore, I utilized particular 3rd party libraries to make my life a bit easier during development. Although, I tried to keep dependencies to a minimum and showcase my skills. I did utilize the following libraries to make some shortcuts for myself:

**[emotion](https://www.npmjs.com/package/emotion):** For CSS-in-JS support rather than writing raw CSS/SCSS files and managing classes on UI elements. Emotion enabled me to create some dynamic styles that otherwise would have required a ton of extra code (both in CSS and JSX) to accommodate.

**[normalize.css](https://www.npmjs.com/package/normalize.css)**: Used for a quick and easy CSS reset for a consistent baseline style across browsers.

**[axios](https://www.npmjs.com/package/axios):** HTTP Request library used to query the OWM API. Personal preference to use this particular library over other alternatives.

**[use-debounce](https://www.npmjs.com/package/use-debounce)**: To limit the amount of HTTP requests we make while typing a city name, we can debounce the input. Rather than write my own debounce hook I decided to just use this light & popular library in the interest of time.

**[moment](https://www.npmjs.com/package/moment):** For simpler date parsing.

Finally, if I had a bit more time, I likely would've tried to write some more tests. In the interest of time, however, I felt it was more important to focus on the actual app itself and how it looked/functioned, as opposed to writing tests to verify implementations.

### Stretch goals attempted

I implemented each of Thinkific's stretch goals:

- **Create a responsive version**
- - I built Weatherific to be mobile first; all CSS was tested first on mobile, and then desktop - where specific styles were also written to make sure the app looks good on all device sizes.
- **Add a feature to explore weather information in other cities**
- - This was a core part of the app design; I couldn't build a weather forecast app without this, because what good would it be?
- **Deploy the exercise somewhere and include the link in the project's README**
- - The exercise was deployed to Netlify and linked towards the top of this README

Beyond just Thinkific's stretch goals, I added a few of my own:

- **Unit Picker**
- - I wanted the ability for my app to switch between C/F when displaying temperatures.
- - Early on in the interest of time, I decided to simply re-query the API upon changing units in the app. Looking back now, I regret this decision and should have just done it client side to begin with. My initial worries came from arithmetic precision errors prevalent in JS, but since I am rounding the temperatures at the end anyways, it really wouldn't have been too hard. By the time I realized this though, I was already fairly committed to my initial implementation and didn't think it was worth the time to change it towards the end of dev.
- **Query Param Support for Direct Linking**
- - Given that I initially wanted to load a particular city by default (which I ended up not doing), I added the ability to visit a particular city upon loading the app when specifying the name in the `location` query parameter.
- - Example: https://weatherific.netlify.app?location=Vancouver
- - If I had more time, I wanted to add a "share" or "copy link" to the UI, but didn't end up implementing this as this implementation was more "nice to have" and didn't really end up being a core function of the app like I wanted it to be.
- **Individually-Selectable Dates in the Forecast to Reveal Hourly Data**
- - One of the more in-depth features of my app is that you can click or tap on the days of the week in the forecast to reveal that day's specific forecast data.
- **Friendly Error Handling**
- - If the OWM API returns an error for any reason, the app will reveal a user-friendly error alert with context of what went wrong. For example, searching for a city that doesn't exist will yield something like this: https://weatherific.netlify.app?location=abcdefgh
- **Featured Cities**
- - Added some links to view Vancouver, Kelowna, and Toronto weather forecasts.

There were a few more stretch goals that I wanted to implement but didn't get to in the interest of time. They were:

- Add a dismissable alert when searching a city letting the user know that if the city they are presented with is incorrect, they could add the region to the search input to find cities in other regions.
- On the app's landing page, there's a jab at "Hey Siri". I wanted to make this a random quote each time you loaded the app, but this was such low priority that I passed up on it.
- I wanted the query parameter to be updated in the URL whenever you searched for a valid city (thereby fleshing out the previously mentioned query param feature to load a specific city) but didn't end up getting to this as I felt it was fairly low priority.
- Wanted to implement a Close/Clear icon beside the city title that, when clicked, would have brought you back to the landing page, as opposed to having to clear the search field yourself.
- Wanted to add a magnifying glass/clear icons in the search field, but again this was low priority and skipped.
- Like I mentioned earlier, I would've really liked to have switched the unit conversions to client-side rather than re-querying the OWM API. By the time I realized that I'd be rounding the temperatures, I felt it was too late to make this switch in the interest of time.
- I really wasn't a fan of OWM's weather icons. If I had some more time, I would've really liked to have used some more colourful icons.

### Instructions to run assignment locally

**Prerequisite:** Please make sure your machine has the latest version of [Node.js](https://nodejs.org) installed.

1. Obtain an API key of your own from OpenWeatherMaps.
2. Supply the API key as the value for the `REACT_APP_OWM_API_KEY` environment variable in the `.env.development` file in the project's root folder. By default this value is empty upon cloning the repository.
3. Run `npm start` and the app should be available shortly after at http://localhost:3000

Optionally you can run `npm test` to see output of the single unit test that was written for a `groupBy` utility function.

### What did you not include in your solution that you want us to know about?

Please see the **Stretch Goals** section, where I also outlined all of the things I wanted to implement but didn't get to in the final solution.


### Other information about your submission that you feel it's important that we know if applicable.

I think I've documented as much as I could through the entire process from design decisions to my own thoughts in the submitted Tech Design/Notes document. If possible, please consider it as part of my exercise submission, even though it wasn't necessarily asked for as part of the solution.


### Your feedback on this technical challenge

I had a lot of fun building this app! I enjoyed getting to be a bit creative with the exercise and having the freedom to take it in my own direction. I'm super happy that I decided to make the TDD, and felt that it was the key to being successful in this exercise. It kept me on track and focused on what I was building, and gave me the comfort in knowing I'd given the entire app good consideration before diving in. It did add a few extra hours of effort, but was totally worth it in my eyes. Overall, I'm very proud of what I built and feel happy presenting it as my submission for the Senior Front End Engineer role at Thinkific!
