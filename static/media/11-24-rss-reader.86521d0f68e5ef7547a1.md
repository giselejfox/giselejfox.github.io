# Personalized Data Hub

[Live Project](https://gisele-data-hub.vercel.app/) | [Github link](https://github.com/giselejfox/gisele-data-hub)

## problem

I was starting to get fed up with algorithms and stuck in content scrolls for hours on end.

## solution

A simple, filterable website that presents the link, title, publication date, and source of all the content I wanted to see without any distractions. For the first iteration the content I was targeting was simple RSS feeds for blogs, substacks, and music, and youtube channels.

I also made sure to open up youtube videos with `/watch_popup` instead of `watch` in the url. This makes it so I'm not on youtube's main interface when I'm watching a video, getting led down a rabbithole of clicks from recommended videos on the sidebar. 

Try it out:
- [Normal youtube link](https://www.youtube.com/watch?v=p9TjuLb5k6s)
- [Formatted youtube link](https://www.youtube.com/watch_popup?v=p9TjuLb5k6s)

## structure

**Frontend**: Next.js React App hosted by Vercel.

**Database**: The data amalgamated from all the different feeds I look at (right now RSS and youtube channels) gets stored in a Firebase Realtime Database. This way I don't request information from each source everytime I load the website. 

**Server(ish)**: Two Vercel Serverless functions
1. Every night one is scheduled as a cron job to request the information from the RSS feeds and youtube API, format it into a singlee JSON file, and send it to the Firebase Realtime Database.
2. The other requests the information from the Firebase Realtime Database to display the feeds whenever the page loads.

## process

I originally tried to keep it simple and keep it all client side (no need for a server or database). This approach meant I had to rely on services that transformed youtube channels into RSS feeds which meant I was limited to only pulling in the latest 5 videos and I could only have max 5 feeds in general at that. *(Now that I'm writing this I'm realizing this could have been a perfectly fine number and I could have used more email addresses if I really wanted more feeds but I'm in too deep now)*.

Instead I was stubborn and wanted more control over how many pieces of content I could pull in and didn't want any sort of limits of the amount of feeds I could have either. I ran into a problem day 1 with hititng the ceiling of my Google API request quota while testing out my site so I realized I would have to schedule a function to run every night, pull in the data from the sources, and store it for the day where I can access it without hitting quotas. I ended up setting up a firebase realtime database and learning how to use Netlify functions to act as a severless server (I still don't know what that means) and schedule and schedule when they ran. This was, at the end of the day, best practices.

In a spurt of energy I refactored all of this into a Next.js app for funsies and saw how much easier it was to host serverless functions and support cron jobs. It'll be a Next.js + Vercel hosuehold until further notice.

## helpful links

[Build a Static RSS Reader to Fight Your Inner Fomo](https://www.smashingmagazine.com/2024/10/build-static-rss-reader-fight-fomo/)

---