import React from 'react'

import FrequencyItemset from './frequent_itemset'
import Stutor from './stutor'

export default [
  {
    title: "Netflix Recommendation through Apriori Frequency Itemset Mining",
    git: "https://github.com/shanetimmerman/apriori-frequent-itemset-mining",
    dates: "2019",
    summary: "MapReduce program to do Frequent Itemset Mining on the 2009 Netflix prize data, using association rules as a proxy for movie recommendation, much like Youtube did in its early days.",
    image: "./netflix_icon.jpeg",
    more: <FrequencyItemset />,
  },
  {
    title: "Studor",
    git: "https://github.com/shanetimmerman/studor",
    dates: "2018",
    summary: "Pheonix and React Web application for tutoring services. Allows tutots to post and hold tutoring sessions with a shared white board, chat, and video call, and students to register and pay for tutoring sessions.",
    image: "./stutor_icon.jpg",
    more: <Stutor />
  },
  {
    title: "Weather Driven Traffic Forcasting",
    git: "https://github.com/jennder/DCRNN_PyTorch/tree/weather_model",
    dates: "2019",
    summary: "Final project for introduction to computer science research. Aimed to extend the Diffuse Concurrent Neural Network from (Li et al. 2017) to include weather prediciton data to challange the prior that traffic patterns are a closed system.<br/>Project incomplete within the allotted course time.",
    image: "./dcrnn_icon.png",
    abandoned: true,
  },
  {
    title: "Santorini",
    git: "https://github.com/jennder/DCRNN_PyTorch/tree/weather_model",
    date: "2018",
    summary: "An implementation of the 2004 Kickstarter game Santorini. Players take turns building a town by placing pieces. Once a player moves to the thrid level of a town, that player wins. The game supports player vs. player, player vs. AI, and AI vs. AI, where players can propose TCP connected AIs to match against one another.",
    image: "./santorini_box_art.png",
  },
  {
    title: "Swim Web App",
    git: "https://github.com/shanetimmerman/swim_web_app",
    dates: "2019",
    summary: "Web application for managing a swim league developed as a final project for CS 3200 Database Design. The project uses MySQL as its DBSM, and has a SpringBoot backend with a React and Bootstrap client.",
    image: "./my_sql_icon.jpg"
  },
  {
    title: "Task Tracker",
    git: "https://github.com/shanetimmerman/task_tracker_single_page_app",
    dates: "2018",
    summary: "Web app allowing users to manage tasks for themselves and their subordinates. The application is written in Elixir and React, using the Phoenix framework and Redux.",
    image: "./phoenix_icon.png",
  }
]