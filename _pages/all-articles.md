---
layout: page 
title: Blogs
permalink: /blogs
comments: false
---

<section class="recent-posts">
    <div class="section-title">
        <h2>
            <span>All Stories</span>
            <span class="applied-filter-list"></span>
        </h2>
    </div>
    <div class="row listrecent">
        <div class="col-12">
             {% assign sorted-posts = paginator.posts | where: "companies", "Nagarro"%}
     {% for post in paginator.posts %}

            {% include postbox.html %}

            {% endfor %}
        </div>
        

     </div>

</section>

<!-- Pagination
================================================== -->
<div class="bottompagination">
    <div class="pointerup"><i class="fa fa-caret-up"></i></div>
    <span class="navigation" role="navigation">
        {% include pagination.html %}
    </span>
</div>