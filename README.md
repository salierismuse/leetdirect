# leetdirect


get it here: https://addons.mozilla.org/en-US/firefox/addon/leetdirector/

leetdirect is a basic firefox browser extension that will redirect you automatically to a leetcode easy upon accessing social media. if you have time to doomscroll, you've got five minutes for an easy!


**get_problems.py**: python script that by default fetches all easys from leetcode's website and provides the links. dumps into a txt file. this can obviously be modified to match whatever specifications you may want it to have if you'd like to change it. it then converts it into a js array and sends that to problems.js to be accessed and used by background.js

blocked sites are set in **manifest.json**, it isn't too hard to go in and add sites you'd prefer to block, though i will be adding a way to do that in the extension shortly. 

