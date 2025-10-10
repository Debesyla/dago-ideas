---
layout: base.html
---

# /ideas

> **Įkvėpta:** [aboutideasnow.com](https://aboutideasnow.com)

{% assign latest = idejos.latest %}
{% if latest %}
*atnaujinta: {{ latest.date | dateYMD }}*<br>
*idėjų: {{ latest.count }} ({{ latest.diff }})*
{% endif %}

{% idejosBody idejos %}