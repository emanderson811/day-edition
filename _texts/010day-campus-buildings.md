---
layout: narrative
title: "CAMPUS BUILDINGS"
author:
rights: Public Domain
source: Iowa State University Library, University Archives
publication-date: 1980 
---

---
* ToC
{:toc}

## Campus Photographs
<img src="{{ site.baseurl }}/assets/buildings-chapt-1.JPG" alt="Aerial photograph of Morrill Hall, Margaret Hall, MacKay Hall, and Botany Hall" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-2.JPG" alt="Black and white photograph of Sanitary Building" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-3.JPG" alt="Black and white photograph of Experiment Station barn with Agronomy Farm Crops Laboratory beyond" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-4.JPG" alt="Aerial black and white photograph of North Hall, Vinyard, Field Barn, Mortensen House, Exp. Station Cattle Barn taken about 1889 or 1890" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-5.JPG" alt="Black and white photograph of Old Main at Full Dress Parade with group of people in military formation in front. Hub at far right" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-6.JPG" alt="Black and white photograph of interier room of the Library in Morrill Hall" style="margin: auto">
<img src="{{ site.baseurl }}/assets/buildings-chapt-7.JPG" alt="Black and white photograph of Veterinary Hospital" style="margin: auto">


## Alphabetical List of Buildings
<div class="buildings-toc">
    {% assign texts_list = site.texts %}
    {% for text in texts_list %}
      {% if text.path contains '/buildings/' %}
      <a class="sidebar-nav-item{% if page.url == text.url %} active{% endif %}" href="{{ text.url | relative_url }}">{{ text.title }}</a>
      {% endif %}
    {% endfor %}
    </div>