---
layout: post
title: "hello"
date: "2018-03-23"
categories: non-technical
author: zeyadetman
comments: true
---

`hello world`

{% highlight ruby %}
def show
@widget = Widget(params[:id])
respond_to do |format|
format.html # show.html.erb
format.json { render json: @widget }
end
end
{% endhighlight %}
