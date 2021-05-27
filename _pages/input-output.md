---
layout: page 
title: Input/Output interview questions 
permalink: /input-output-interview-questions 
comments: false
---

This page consists of all the **Input/Output** related questions based on various topics related to **frontend**.

Click on the **question title** to see the code and solution.

{% for data in site.data.input-output %}
<details markdown="1">
<summary><b>Question {{forloop.index}}: </b>{{data.title}}
{% if data.hints %}
<span> 
{% for hint in data.hints %}
<code class="io-tags">{{hint}}</code>
{% endfor %}
</span>
{% endif %}
</summary>
{% if data.type == 'js' %}
```js
{{data.code}}
```
{% endif %}

{% if data.type == 'css' %}
```htmlcss
{{data.code}}
```
{% endif %}

<div>
{% if data.solution %}
<a href="{{data.solution}}" target="_blank">Solution {{forloop.index}} here</a>
{% endif %}
{% if data.video %}
<span> | </span>
<a href="{{data.video}}" target="_blank">Video explaination</a>
{% endif %}
</div>

</details>
{% endfor %}









