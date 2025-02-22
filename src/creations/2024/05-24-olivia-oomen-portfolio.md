# Industrial Design Interactive Online Portfolio

[Live Site](https://oliviaoomen.com/) | [Github](https://github.com/giselejfox/olivia-website)

**Role and Contributions**: Sole Developer

**Technolgoies**: React, React Router, Matter.js, JavaScript, HTML, CSS

![playful homepage with brightly colored items overlapping text reading Olivia Oomen](img/creations/olivia-oomen-website/homepage.png)


## Features:
- Interactive homepage featuring draggable, "throwable", and clickable images of Olivia's projects to get people engaging with Olivia's work in a playful way.
- Skeumorphic interactive workspace with an animated background and clickable projects on "shelves".
- Detail pages of each project built with pre-established components.
- An interactive 3D toy figure of Olivia on the [about page](https://oliviaoomen.com/about).
- Dynamic navigation system using React Router.
- Responsive design that adapts to different screen sizes.
- A Squarespace hosted domain for a Firebase hosted site.

## Challenges and Solutions:
- **Challenge**: Images on the homepage warp in proportion when the window re-sizes.
    - *Solution*: Efficiently handle window resize events by reloading on a slight delay and debouncing to prevent multiple reloads.
- **Challenge**: Want to be able to click on floating images on the homepage to access the project detail pages.
    - *Solution*: Implement double-click detection for navigation using Matter.js events.

## From Square to Custom: A Portfolio Evolution

Working with Olivia on her Squarespace portfolio, we quickly reached the platform's customization limits. Despite pushing the boundaries of drag-and-drop components and CSS modifications, we realized that achieving her unique vision would require a completely custom solution.

Our objective was clear: create an engaging, interactive homepage that would showcase Olivia's projects in a playful yet professional manner. Breaking free from template constraints opened up exciting new possibilities for creative expression.

The development process involved several iterations. Our initial exploration led us to experiment with 3D elements using Three.js through the React Three Fiber library, drawing inspiration from Oliver LaRose's tutorial. While this approach was exciting to develop, we ultimately decided to streamline the design to prioritize faster loading times and better align with Olivia's original vision.

The final product is something I'm particularly proud of – a professional, polished portfolio that continues to evolve through ongoing iterations and refinements.

------


