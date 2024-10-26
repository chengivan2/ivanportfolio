# Ivan the Dev

This is my new portfolio; started on 25th October 2024.

## Justification for a new portfolio

My [legacy portfolio](https://github.com/chengivan2/ivan-portfolio) is built with React, initially set up using the Vite framework. React is known for creating single-page applications (SPAs) whereas my portfolio requires multiple pages (or routes), which proved challenging with Vite. Vite is optimized for frontend applications but lacks built-in support for managing multiple routes, making routing more complex.

My portfolio has different pages. So for most of the part, the annoying trend was that whenever a visitor tried to reload a page that wasn't the home page, it brought back a 404. Remember React applications are basically SPAs therefore, only one index.html is served by the server after build. Meaning that whenever you request the server for a page that isn't the home page (in my case, a visitor navigating to a "non-home" route then trying to reload it), it's not surprising that the server would go "Huh?" then proceed to serve you a 404. This is because the server doesn’t “see” any file for that route.

This problem, even though having some hacks to mitigate it, made me realize that switching frameworks would provide a longer-term solution. So I have decided to switch to NextJS.

NextJS comes with file-based routing out-of-the-box while having valuable SEO features that can help improve the portfolio’s visibility.

Many would say that I should just migrate to NextJS in the same legacy directory but switching to file-based routing inside that directory would be hectic compared to if I just spun up a new project.