<?php
        $to = 'job@hqmodels.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = '[Заявка]'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Cсылка на соцсеть: '.$_POST['social'].'</p>
                        <p>Вакансия: '.$_POST['vacancy'].'</p> 
                        <p>Город: '.$_POST['city'].'</p>                      
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: hqmodels.ru\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>
