---
layout: narrative
title: "Campus Buildings"
author:
rights: Public Domain
source: Iowa State University Library, University Archives
publication-date: 1980 
---

---

<div class="buildings-toc">
    {% assign texts_list = site.texts %}
    {% for text in texts_list %}
      {% if text.path contains '/buildings/' %}
      <a class="sidebar-nav-item{% if page.url == text.url %} active{% endif %}" href="{{ text.url | relative_url }}">{{ text.title }}</a>
      {% endif %}
    {% endfor %}
    </div>