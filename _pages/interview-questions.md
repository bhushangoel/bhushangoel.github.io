---
layout: page 
title: Interview Questions 
permalink: /interview-questions 
comments: false
---
<div class="row justify-content-between">
    <div class="col-md-4">
        <div class="side-menu sticky-top sticky-top-80 fix-ht">
            <ul class="interview-sticky-menu">
                {% for data in site.data.interview-question-list %}
                <li>
                    <a href="{{data.link}}">{{data.title}}</a>
                   {% assign url = window.location %}
                   {{page.location}}
                </li>
                {% if data.children %}
                <ul class="interview-sticky-menu">
                    {% for child in data.children %}
                    <li><a href="{{child.link}}">{{ child.title }}</a></li>
                    {% endfor %}
                </ul>
                {% endif %}
                {% endfor %}
            </ul>
        </div>
    </div>
    <div class="col-md-8 pr-5">
        <h2 id="js">JavaScript</h2>
        <h3 id="js-theory">Theory</h3>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-b" role="tab"
                   aria-controls="nav-b" aria-selected="true">Beginner</a>
                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-i" role="tab"
                   aria-controls="nav-i" aria-selected="false">Intermediate</a>
                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-a" role="tab"
                   aria-controls="nav-a" aria-selected="false">Advanced</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-b" role="tabpanel" aria-labelledby="nav-home-tab">
                {% include js/js-beginner.html %}
            </div>
            <div class="tab-pane fade" id="nav-i" role="tabpanel" aria-labelledby="nav-profile-tab">
                {% include js/js-intermediate.html %}
            </div>
            <div class="tab-pane fade" id="nav-a" role="tabpanel" aria-labelledby="nav-contact-tab">
                {% include js/js-advanced.html %}
            </div>
        </div>
        <!-- <h3 id="js-io"> Input/output </h3>
        {% include js/js-io.html %}
        <hr> -->
        <hr>
        <h2 id="angularjs"> Angular JS</h2>
        <h3 id="angular-theory"> Theory-based</h3>
        {% include angular/angular-theory.html %}
        <h3 id="angular-scenario"> Scenario-Based</h3>
        {% include angular/angular-scenario.html %}
        <hr>
        <h2 id="html"> HTML</h2>
        {% include html/html-questions.html %}
        <hr>
        <h2 id="css"> CSS</h2>
        {% include css/css.html %}
        <hr>
        <h2 id="ts"> TypeScript</h2>
        {% include ts/typescript.html %}
        <hr>
        <h2 id="react"> React JS</h2>
        {% include react/react.html %}
        <hr>
    </div>
</div>



