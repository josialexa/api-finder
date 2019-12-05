import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <section id='home'>
                <div>
                <h1>Welcome to API Finder!</h1>
                <p>
                    This is the home of API convenience!  With API Finder, discovering new APIs is as easy as Pi!
                    You have many options for finding your perfect API, from searching our entire API listing at one go,
                    to hand searching through our multitude of categories.
                </p>
                <p>
                    Searching an API is simple for the user, who can rest assured that the search won't miss a potential
                    match.  Just type in your search phrase, and API Finder searches through API names and descriptions
                    to ensure every possible match is found.  You can even search inside a specific category, to make sure
                    you aren't seeing API's matching your search that you don't particularly want.
                </p>
                <p>
                    If you do find an API, and like it, or have a bad experience with one, or just have some tips, feel 
                    free to leave a comment on that API.  Make sure when you're looking for an API to use that you check 
                    out the comment section for your potential choice to see if it can help you determine if your search 
                    is over!
                </p>
                <p>
                    Additionally, if our plethora of available APIs doesn't contain a right fit for you, or you develop
                    your own API and want to show it off here, please feel free to add it here!  Simply fill in a 
                    quick form, and other developers will be able to find it in the future, as well as give kudos or 
                    ask questions in the comments.
                </p>
            </div>
        </section>
    )
}