<?php 
$content = file_get_contents('https://calendar.google.com/calendar/u/0/embed?src=c_6j3h69e15acmqr0u58h8cheiso@group.calendar.google.com&ctz=Europe/Moscow&hl=ru&mode=AGENDA');
$content = str_replace('</title>','</title><base href="https://calendar.google.com/calendar/u/0/r" />', $content);
$content = str_replace('</head>', '<link rel="stylesheet" href="https://mrmep3.github.io/sites/liontech_styles.css" /></head>', $content);
$content = str_replace('<body style="background-color:#fff">', '<body style="background-color:#fee500">', $content);
echo $content;
