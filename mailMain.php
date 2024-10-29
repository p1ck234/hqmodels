<?php
    // Email sending setup
    $to = 'job@hqmodels.studio';
    $subject = '[Заявка]';
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$_POST['name'].'</p>
                <p>Телефон: '.$_POST['phone'].'</p>
                <p>Ссылка на соцсеть: '.$_POST['social'].'</p>
                <p>Вакансия: '.$_POST['vacancy'].'</p> 
                <p>Город: '.$_POST['city'].'</p>                      
            </body>
        </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: hqmodels.studio\r\n";
    
    // Send email
    mail($to, $subject, $message, $headers);

    // Telegram sending setup
    $botToken = "7961060962:AAG4iC0jUn7ORTSwdM1ItIW6073hi5wNSOY"; // Replace with your bot token
    $chatId = "358932815"; // Replace with your chat ID
    $telegramMessage = "Имя: " . $_POST['name'] . "\n" .
                       "Телефон: " . $_POST['phone'] . "\n" .
                       "Ссылка на соцсеть: " . $_POST['social'] . "\n" .
                       "Вакансия: " . $_POST['vacancy'] . "\n" .
                       "Город: " . $_POST['city'];

    $url = "https://api.telegram.org/bot" . $botToken . "/sendMessage";
    $data = array(
        'chat_id' => $chatId,
        'text' => $telegramMessage
    );

    // cURL to send POST request to Telegram
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $result = curl_exec($ch);
    curl_close($ch);

    // Confirm successful completion
    if ($result) {
        echo "Message sent to both Telegram and email!";
    } else {
        echo "Failed to send message.";
    }
?>
