---
layout: layouts/page.njk
title: Диспетчер розкладу
description: Розклад уроків та дзвінків Гімназії «ПРОСВІТ»
permalink: /students/dispatcher/
blocks:
  - type: styled_heading
    text: "🕐 Диспетчер розкладу"
    level: "h2"
    align: "center"
    color: "blue"

  - type: styled_heading
    text: "🔔 Розклад дзвінків"
    level: "h3"
    align: "left"

  - type: simple_text
    body: |
      <table style="width:100%; border-collapse:collapse; font-size:1rem;">
        <thead>
          <tr style="background:#1d4ed8; color:white;">
            <th style="padding:10px 16px; text-align:left">Урок</th>
            <th style="padding:10px 16px; text-align:left">Початок</th>
            <th style="padding:10px 16px; text-align:left">Кінець</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background:#f0f9ff"><td style="padding:10px 16px">1-й урок</td><td style="padding:10px 16px">08:00</td><td style="padding:10px 16px">08:45</td></tr>
          <tr><td style="padding:10px 16px">2-й урок</td><td style="padding:10px 16px">08:55</td><td style="padding:10px 16px">09:40</td></tr>
          <tr style="background:#f0f9ff"><td style="padding:10px 16px">3-й урок</td><td style="padding:10px 16px">09:55</td><td style="padding:10px 16px">10:40</td></tr>
          <tr><td style="padding:10px 16px">4-й урок</td><td style="padding:10px 16px">10:55</td><td style="padding:10px 16px">11:40</td></tr>
          <tr style="background:#f0f9ff"><td style="padding:10px 16px">5-й урок</td><td style="padding:10px 16px">11:55</td><td style="padding:10px 16px">12:40</td></tr>
          <tr><td style="padding:10px 16px">6-й урок</td><td style="padding:10px 16px">12:50</td><td style="padding:10px 16px">13:35</td></tr>
          <tr style="background:#f0f9ff"><td style="padding:10px 16px">7-й урок</td><td style="padding:10px 16px">13:45</td><td style="padding:10px 16px">14:30</td></tr>
        </tbody>
      </table>

  - type: styled_heading
    text: "📅 Розклад уроків"
    level: "h3"
    align: "left"

  - type: document_links
    category_title: "Розклад занять"
    documents:
      - title: Розклад уроків — початкова школа (1–4 кл.)
        url: "#"
        icon: "📅"
        description: Актуальний розклад (оновлюється щосеместру)
      - title: Розклад уроків — гімназія (5–9 кл.)
        url: "#"
        icon: "📅"
        description: Актуальний розклад
      - title: Розклад уроків — старша школа (10–11 кл.)
        url: "#"
        icon: "📅"
        description: Актуальний розклад
      - title: Розклад гурткової роботи
        url: "#"
        icon: "🎨"
        description: Позакласні заняття та гуртки
---
