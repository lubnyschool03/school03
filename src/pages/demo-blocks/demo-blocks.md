---
layout: layouts/page.njk
title: "Демо — Усі блоки"
description: "Демонстрація всіх доступних блоків контенту для шкільного сайту"
permalink: /demo-blocks/
blocks:

  # ════════════════════════════════════════
  # 1. ПРОСТИЙ ТЕКСТ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "1. 📝 Простий текст"
    level: "h2"
    color: "blue"
    align: "left"

  - type: simple_text
    body: |
      Це **простий текстовий блок** з підтримкою Markdown. Можна використовувати *курсив*, **жирний**, списки:
      - Перший пункт
      - Другий пункт
      - Третій пункт

      А також [посилання](https://example.com) та інші елементи Markdown.

  # ════════════════════════════════════════
  # 2. СТИЛІЗОВАНИЙ ЗАГОЛОВОК
  # ════════════════════════════════════════
  - type: styled_heading
    text: "2. 🔤 Стилізований заголовок"
    level: "h2"
    color: "green"
    align: "left"

  - type: styled_heading
    text: "Цей заголовок вирівняний по центру"
    level: "h3"
    color: "orange"
    align: "center"

  # ════════════════════════════════════════
  # 3. СТИЛІЗОВАНИЙ ТЕКСТ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "3. 🎨 Стилізований текст"
    level: "h2"
    color: "purple"
    align: "left"

  - type: styled_text
    text: "Цей текст має **синій фон** і виділений жирним шрифтом. Підходить для акцентних блоків."
    color: "blue"
    bg_color: "light-blue"
    align: "center"
    weight: "bold"

  # ════════════════════════════════════════
  # 4. ВИДІЛЕНИЙ БЛОК / ПОВІДОМЛЕННЯ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "4. ⚠️ Виділений блок / Повідомлення"
    level: "h2"
    color: "blue"
    align: "left"

  - type: alert_block
    variant: "info"
    title: "Інформація"
    content: "Це інформаційний блок — для **важливих оголошень**."

  - type: alert_block
    variant: "success"
    title: "Успіх"
    content: "Вітаємо! Реєстрація пройшла успішно."

  - type: alert_block
    variant: "warning"
    content: "⚠️ Увага: Заняття перенесені на наступний тиждень."

  - type: alert_block
    variant: "error"
    content: "❌ Термін подачі документів *закінчився*."

  # ════════════════════════════════════════
  # 5. СПИСОК ДОКУМЕНТІВ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "5. 📄 Список документів"
    level: "h2"
    color: "green"
    align: "left"

  - type: document_links
    category_title: "Нормативні документи"
    documents:
      - title: "Статут гімназії"
        url: "#"
        icon: "📋"
        description: "Основний документ закладу"
      - title: "Освітня програма"
        url: "#"
        icon: "📚"
        description: "Програма на 2025-2026 н.р."
      - title: "Річний план"
        url: "#"
        icon: "📅"

  # ════════════════════════════════════════
  # 6. ЗОБРАЖЕННЯ + ТЕКСТ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "6. 🖼️ Зображення + Текст"
    level: "h2"
    color: "orange"
    align: "left"

  - type: image_text
    title: "Наша гімназія"
    image: "/assets/images/logo.png"
    image_position: "right"
    body: |
      Гімназія «ПРОСВІТ» — це сучасний освітній простір, де кожна дитина розкриває свій потенціал.

      Ми використовуємо **інноваційні методики** навчання та створюємо комфортне середовище для учнів.

  # ════════════════════════════════════════
  # 7. ВІДЕО (YouTube)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "7. 🎬 Відео (YouTube)"
    level: "h2"
    color: "red"
    align: "left"

  - type: video
    title: "Відео-презентація"
    video_id: "dQw4w9WgXcQ"

  # ════════════════════════════════════════
  # 8. СТАТИСТИКА (ЦИФРИ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "8. 📊 Статистика (цифри)"
    level: "h2"
    color: "purple"
    align: "left"

  - type: stats_grid
    columns: "4"
    stats:
      - number: "850+"
        label: "Учнів"
        color: "orange"
      - number: "65"
        label: "Вчителів"
        color: "blue"
      - number: "90"
        label: "Років історії"
        color: "purple"
      - number: "98%"
        label: "Вступають до ВНЗ"
        color: "amber"

  # ════════════════════════════════════════
  # 9. ХРОНОЛОГІЯ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "9. 📅 Хронологія"
    level: "h2"
    color: "blue"
    align: "left"

  - type: timeline_block
    items:
      - year: "1933"
        description: "Заснування школи"
        color: "blue"
      - year: "1972"
        description: "Будівництво нового корпусу"
        color: "purple"
      - year: "2020"
        description: "Перейменування на гімназію «ПРОСВІТ»"
        color: "teal"

  # ════════════════════════════════════════
  # 10. СІТКА (МУЗЕЙ/НАПРЯМКИ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "10. 🏛️ Сітка (Музей/Напрямки)"
    level: "h2"
    color: "green"
    align: "left"

  - type: museum_grid
    columns: "3"
    items:
      - icon: "🧵"
        title: "Вишивки"
        description: "Колекція сорочок та рушників"
        color: "rose"
      - icon: "🏺"
        title: "Гончарство"
        description: "Горщики, миски, писанки"
        color: "orange"
      - icon: "🔨"
        title: "Ковальство"
        description: "Знаряддя праці та предмети побуту"
        color: "gray"

  # ════════════════════════════════════════
  # 11. КАРТКА АДМІНІСТРАТОРА
  # ════════════════════════════════════════
  - type: styled_heading
    text: "11. 👤 Картка адміністратора"
    level: "h2"
    color: "orange"
    align: "left"

  - type: admin_card
    role: "director"
    position: "Директор гімназії"
    name: "Іваненко Іван Іванович"
    category: "Вища категорія"
    description: "Керівник закладу з 2015 року. Має великий досвід у сфері освіти."

  # ════════════════════════════════════════
  # 12. ЧЛЕНИ КОМІСІЇ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "12. 👥 Члени комісії"
    level: "h2"
    color: "purple"
    align: "left"

  - type: commission_members
    title: "Атестаційна комісія"
    head: "Іваненко І.І."
    secretary: "Петренко П.П."
    members:
      - "Сидоренко С.С."
      - "Коваленко К.К."
      - "Мельник М.М."

  # ════════════════════════════════════════
  # 13. РОЗКЛАД ЗАСІДАНЬ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "13. 🗓️ Розклад засідань"
    level: "h2"
    color: "blue"
    align: "left"

  - type: schedule_block
    title: "Засідання педагогічної ради"
    variant: "green"
    meetings:
      - number: "1"
        label: "Організаційне засідання"
        date: "Вересень 2025"
      - number: "2"
        label: "Підсумки I семестру"
        date: "Грудень 2025"
      - number: "3"
        label: "Підсумки навчального року"
        date: "Травень 2026"

  # ════════════════════════════════════════
  # 14. ГАЛЕРЕЯ ЗОБРАЖЕНЬ
  # ════════════════════════════════════════
  - type: styled_heading
    text: "14. 🖼️ Галерея зображень"
    level: "h2"
    color: "green"
    align: "left"

  - type: gallery
    title: "Фотогалерея"
    images:
      - image: "/assets/images/logo.png"
      - image: "/assets/images/logo.png"
      - image: "/assets/images/logo.png"

  # ════════════════════════════════════════
  # 15. КОНТАКТНА КАРТКА (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "15. 📞 Контактна картка (НОВИЙ)"
    level: "h2"
    color: "red"
    align: "left"

  - type: contact_card
    name: "Ковальчук Олена Вікторівна"
    position: "Практичний психолог"
    phone: "+38 (053) 616-18-15"
    email: "psychologist@prosvit.edu.ua"
    schedule: "Пн-Пт: 9:00-16:00"
    description: "Консультації для учнів та батьків з питань адаптації, навчання та виховання."

  # ════════════════════════════════════════
  # 16. FAQ (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "16. ❓ FAQ — Питання-відповіді (НОВИЙ)"
    level: "h2"
    color: "orange"
    align: "left"

  - type: faq_block
    title: "Часті питання"
    items:
      - question: "Які документи потрібні для вступу?"
        answer: |
          Для вступу потрібні:
          - Заява від батьків
          - Копія свідоцтва про народження
          - Медична довідка
          - Фото 3x4 (2 шт.)
      - question: "Чи є продовжена група?"
        answer: "Так, у гімназії працює група продовженого дня для учнів 1-4 класів. Графік: з 12:00 до 17:30."
      - question: "Як зв'язатися з адміністрацією?"
        answer: "Телефон: +38 (053) 616-18-15. Email: school3_lubny@ukr.net. Або скористайтесь формою зворотного зв'язку на сайті."

  # ════════════════════════════════════════
  # 17. НУМЕРОВАНИЙ СПИСОК (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "17. 🔢 Нумерований список / Кроки (НОВИЙ)"
    level: "h2"
    color: "purple"
    align: "left"

  - type: numbered_list
    title: "Як записатися до гімназії"
    items:
      - title: "Подати заяву"
        description: "Заповніть заяву на вступ на сайті або в канцелярії."
      - title: "Подати документи"
        description: "Принесіть **оригінали документів** до канцелярії гімназії."
      - title: "Пройти співбесіду"
        description: "Дитина проходить ознайомчу бесіду з педагогом."
      - title: "Отримати результат"
        description: "Протягом 5 робочих днів ви отримаєте рішення."

  # ════════════════════════════════════════
  # 18. ТАБЛИЦЯ (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "18. 🗂️ Таблиця (НОВИЙ)"
    level: "h2"
    color: "blue"
    align: "left"

  - type: table_block
    title: "Розклад дзвінків"
    headers:
      - text: "Урок"
      - text: "Початок"
      - text: "Кінець"
      - text: "Перерва"
    rows:
      - cells:
          - text: "1-й урок"
          - text: "8:30"
          - text: "9:15"
          - text: "10 хв"
      - cells:
          - text: "2-й урок"
          - text: "9:25"
          - text: "10:10"
          - text: "10 хв"
      - cells:
          - text: "3-й урок"
          - text: "10:20"
          - text: "11:05"
          - text: "20 хв"
      - cells:
          - text: "4-й урок"
          - text: "11:25"
          - text: "12:10"
          - text: "10 хв"
      - cells:
          - text: "5-й урок"
          - text: "12:20"
          - text: "13:05"
          - text: "10 хв"

  # ════════════════════════════════════════
  # 19. КАРТКИ З ІКОНКАМИ (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "19. 🎯 Картки з іконками (НОВИЙ)"
    level: "h2"
    color: "green"
    align: "left"

  - type: icon_cards
    title: "Наші цінності"
    columns: "3"
    cards:
      - icon: "🎓"
        title: "Якісна освіта"
        description: "Відповідність державним стандартам та інноваційні підходи"
      - icon: "🤝"
        title: "Командна робота"
        description: "Співпраця між учнями, вчителями та батьками"
      - icon: "🌍"
        title: "Відкритість"
        description: "Прозорість у роботі та відкритість до нового"
      - icon: "💡"
        title: "Креативність"
        description: "Розвиток творчого потенціалу кожного учня"
      - icon: "🛡️"
        title: "Безпека"
        description: "Комфортне та безпечне освітнє середовище"
      - icon: "📈"
        title: "Розвиток"
        description: "Постійне вдосконалення та зростання"

  # ════════════════════════════════════════
  # 20. ЦИТАТА / ВІДГУК (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "20. 💬 Цитата / Відгук (НОВИЙ)"
    level: "h2"
    color: "orange"
    align: "left"

  - type: quote_block
    text: "Освіта — це найпотужніша зброя, яку ви можете використати, щоб змінити світ."
    author: "Нельсон Мандела"
    role: "Президент ПАР, Нобелівський лауреат"

  # ════════════════════════════════════════
  # 21. КНОПКА-ПОСИЛАННЯ (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "21. 🔘 Кнопка-посилання (НОВИЙ)"
    level: "h2"
    color: "red"
    align: "left"

  - type: button_block
    text: "Записатися на навчання"
    url: "#"
    style: "primary"
    size: "large"
    align: "center"
    icon: "📝"

  - type: button_block
    text: "Завантажити документ"
    url: "#"
    style: "accent"
    size: "medium"
    align: "center"
    icon: "📥"

  - type: button_block
    text: "Переглянути на Facebook"
    url: "https://www.facebook.com/gymnasium.prosvit/"
    style: "outline"
    size: "small"
    align: "center"
    new_tab: true

  # ════════════════════════════════════════
  # 22. КАРТКИ ВЧИТЕЛІВ (НОВИЙ)
  # ════════════════════════════════════════
  - type: styled_heading
    text: "22. 👩‍🏫 Картки вчителів (НОВИЙ)"
    level: "h2"
    color: "purple"
    align: "left"

  - type: teacher_cards
    title: "Наші педагоги"
    columns: "3"
    teachers:
      - name: "Петренко Марія Олексіївна"
        subject: "Українська мова та література"
        category: "Вища категорія"
        experience: "25 років"
        description: "Автор методичних посібників, учасник конкурсу «Учитель року»."
        awards:
          - text: "Учитель року 2022"
          - text: "Грамота МОН"
      - name: "Коваленко Андрій Вікторович"
        subject: "Математика"
        category: "Перша категорія"
        experience: "12 років"
        description: "Підготував переможців обласних олімпіад з математики."
      - name: "Сидоренко Тетяна Іванівна"
        subject: "Англійська мова"
        category: "Спеціаліст вищої категорії"
        experience: "18 років"
        description: "Сертифікований екзаменатор Cambridge English."
        awards:
          - text: "Сертифікат CELTA"
---
