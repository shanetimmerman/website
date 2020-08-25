import React from 'react'

import FrequencyItemset from './frequent_itemset'
import Stutor from './stutor'
import TrafficForcasting from './traffic_forcasting'

export default [
  {
    title: 'shanetimmerman.com',
    git: 'https://github.com/shanetimmerman/website',
    dates: '2019',
    summary: 'I figured it was about time I make myself a webstite. Written in React and Semantic UI, this site provides me the ability to delve deeper into fron end development, as well as provide some interesting ways to display and visualize some results from previous projects. It also provides a platform for any future web-apps I develop, so look out for those!',
    image: './shanetimmerman_icon.png',
  },
  {
    title: 'Netflix Recommendation through Apriori Frequency Itemset Mining',
    git: 'https://github.com/shanetimmerman/apriori-frequent-itemset-mining',
    dates: '2019',
    summary: 'MapReduce program to do Frequent Itemset Mining on the 2009 Netflix prize data, using association rules as a proxy for movie recommendation, much like Youtube did in its early days. The algorithm uses an apriori based approach, translated into iterative MapReduce jobs written in Java run in AWS EMR.',
    image: './netflix_icon.jpeg',
    more: <FrequencyItemset />,
  },
  {
    title: 'Studor',
    git: 'https://github.com/shanetimmerman/studor',
    dates: '2018',
    summary: 'Pheonix and React Web application for tutoring services. Allows tutots to post and hold tutoring sessions with a shared white board, chat, and video call, and students to register and pay for tutoring sessions. The application also supports paid transactions through the PayPal API. The application was written in Elixir though Phoenix and JS through React, using Redux for consolodated state, and PeerJS to handle messaging, Formik to streamline form development, and PostgreSQL for data storage.',
    image: './stutor_icon.jpg',
    more: <Stutor />
  },
  {
    title: 'Weather Driven Traffic Forcasting',
    git: 'https://github.com/jennder/DCRNN_PyTorch/tree/weather_model',
    dates: '2019',
    summary: 'Final project for CS 2950 Introduction to Computer Science Research. Aimed to extend the Diffuse Concurrent Neural Network from (Li et al. 2017) to include weather prediciton data to challange the prior that traffic patterns are a closed system.Project incomplete within the allotted course time. The model was written primarily by liyaguang, with slight modifications to enable weather data ingestion, and was composed in PyTorch.',
    image: './dcrnn_icon.png',
    abandoned: true,
    more: <TrafficForcasting />
  },
  {
    title: 'Santorini',
    git: 'https://github.com/jennder/DCRNN_PyTorch/tree/weather_model',
    date: '2018',
    summary: 'An implementation of the 2004 Kickstarter game Santorini. Players take turns building a town by placing pieces. Once a player moves to the thrid level of a town, that player wins. The game supports player vs. player, player vs. AI, and AI vs. AI, where players can propose TCP connected AIs to match against one another. The application is written entirely in Python3.',
    image: './santorini_box_art.png',
  },
  {
    title: 'Swim Web App',
    git: 'https://github.com/shanetimmerman/swim_web_app',
    dates: '2019',
    summary: 'Web application for managing a swim league developed as a final project for CS 3200 Database Design. It enables control over teams, coaches, swim leagues, individual swimmers, meets, races, and records. While the UI is simplistic, the exposed API provides a system for mass data ingrestion to help facilitate league management. The project uses MySQL as its DBSM, and has a SpringBoot backend with a React and Bootstrap client.',
    image: './my_sql_icon.jpg'
  },
  {
    title: 'Task Tracker',
    git: 'https://github.com/shanetimmerman/task_tracker_single_page_app',
    dates: '2018',
    summary: 'A minimalistic task tracker web application. Users can easily view and manage their unfinished tasks, create new ones for themselves or teammates, and edit timeslines and associated tasks. The application is written in Elixir and React, using the Phoenix framework and Redux, and a Boostrap UI, and uses PostreSQL to manage the data.',
    image: './phoenix_icon.png',
  },
  {
    title: 'Spotify Desktop Genius',
    git: 'https://github.com/shanetimmerman/HBP2018',
    dates: '2018',
    summary: 'Kivy desktop application emulating Spotify and Genius\' “Behind the Lyrics” mobile feature. I personally mainly use Spotify\'s desktop application when I am working, but I like being able to see the lyrics and narrative provied by Genius for that music. This project bridges those two technologies together, allowing users to control and listen to their Spotify music through Spotify\'s API while viewing synced lyrical and song information scraped from the web. This project was made for HackBeanPot 2018, using the Kivy framework and Python3.',
    image: './genius_icon.png'
  }
]