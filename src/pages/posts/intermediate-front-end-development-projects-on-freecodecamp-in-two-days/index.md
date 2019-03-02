---
title: Intermediate Front End Development Projects on freecodecamp in two days
categories: technical
date: "2017-09-13"
layout: post
author: zeyadetman
comments: true
---

Assalamu Alaikum everyone :D
I just finished my fourth and last project on <a href="https://www.freecodecamp.org/map-aside#nested-collapseIntermediateFrontEndDevelopmentProjects" target="_blank" rel="noopener">Intermediate Front End Development Projects</a> on <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener">freecodecamp</a> and in this post i'll describe these hours, tools, maybe mention some lines of code and BUGS.

<h4>For the first Project <a href="https://www.freecodecamp.org/challenges/build-a-random-quote-machine" target="_parent">Build a Random Quote Machine</a>:</h4>
<img class=" size-full wp-image-2000 aligncenter img-fluid" src="https://zeyadetman.files.wordpress.com/2017/09/movies.png" alt="movies" width="1231" height="629" />

I used API to generate movies quotes from <a href="https://www.mashape.com/" target="_blank" rel="noopener">https://www.mashape.com/</a> and using Postman the easiest way to deal with APIs in general. for .js file i think it was easy and have no bugs, but i get struggled before in using twitter share button, the tweet text wasn't changing in every time i changing it in code, but now i have to solution for this problem one if you wanna use twitter's share button style and the other one if you wanna use you style:

{% highlight javscript %}
//SOL-1: you have to reload twitter share button
twttr.widgets.load();
//SOL-2: you have to write all text, hashtags, everything in href
"`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtag}&via=${twittername}`"
{% endhighlight %}

<strong>Note: </strong><em>in previous code i used ES6 feature `${ }` to write variables, it's similar to "str "+var+" str".</em>

you maybe don't know how to get random number in range, the easy way:

{% highlight javscript %}
var index = Math.floor(min + (Math.random() \* ((max - min) + 1)));
{% endhighlight %}

<a href="https://github.com/zeyadetman/MoviesQuotes" target="_blank" rel="noopener">The project on github</a>

<h4>For the second Project <a href="https://www.freecodecamp.org/challenges/show-the-local-weather" target="_parent">Show the Local Weather</a>:</h4>
<img class=" size-full wp-image-2002 aligncenter img-fluid" src="https://zeyadetman.files.wordpress.com/2017/09/weather.png" alt="weather" width="1277" height="617" />

I used this API <a href="https://fcc-weather-api.glitch.me/" target="_blank" rel="noopener">https://fcc-weather-api.glitch.me/</a> using postman, The only bug i faced, it was horrible but i have simple solution to deal with it not fixing it, Here is the Problem <em>The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '\*' when the request's credentials mode is 'include'.</em> if you working on <strong>Windows</strong> just open CMD and write this line to open chrome in no-security
<code>"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir="c:/chromedev"</code>
or <strong>Linux</strong>
<code>sudo google-chrome --no-sandbox --disable-web-security --user-data-dir="/opt/google/chrome"</code>

here's you can enable location on devices

{% highlight javscript %}
if ("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
func(position.coords.latitude, position.coords.longitude);
});
} else {
// geolocation isn't available
}
{% endhighlight %}
<a href="https://github.com/zeyadetman/WeatherApp" target="_blank" rel="noopener">The project on github</a>

<h4>For the third Project <a href="https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer" target="_parent">Build a Wikipedia Viewer</a>:</h4>
<img class=" size-full wp-image-2005 aligncenter img-fluid" src="https://zeyadetman.files.wordpress.com/2017/09/wikipedia.png" alt="wikipedia" width="1249" height="615" />

Wikipedia have the most wonderful APIs system i have ever seen, maybe because i didn't try all apis' systems, but it's not easy to use any of them i guess. but give it try from <a href="https://www.mediawiki.org/wiki/API:Main_page" target="_blank" rel="noopener">this link</a> and you can open random article using <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener">this link</a> nothing to say for this project, you can see <a href="https://github.com/zeyadetman/Wikipedia" target="_blank" rel="noopener">my progress here</a>

<h4>For the fourth Project <a href="https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api" target="_parent">Use the Twitch.tv JSON API Complete </a>:</h4>
<img class=" size-full wp-image-2007 aligncenter img-fluid" src="https://zeyadetman.files.wordpress.com/2017/09/twitch.png" alt="twitch" width="1265" height="631" />

I don't like this project at all, and i think it was completely useless. Ok you can see <a href="https://github.com/zeyadetman/TwitchTv/" target="_blank" rel="noopener">what i did</a>
