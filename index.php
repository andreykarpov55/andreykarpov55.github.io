<!doctype html>
<html lang=ru>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
    <script type="text/javascript" src="clock.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>

</head>
<body onload="clock();">

<main class="main">
    <div class="wrapper-content">
        <div class="cabin">
            <div class="title">
                Time Omsk: <span id="time">time</span>(<span id="timeT">timeT</span>) <br>

            </div>

        </div>
        <div class="block-timer">
            <div class="bloc-timer-text">
                second left: <span id="secondleft"> secondleft</span> <br>
            </div>
            <div class="pie pie-1">

                <div class="clip1">
                    <div class="slice1"></div>
                </div>
                <div class="clip2">
                    <div class="slice2"></div>
                </div>
                <div class="status"></div>
            </div>
        </div>
        <div class="block-timer">

            <div class="bloc-timer-text">
                minutes left: <span id="minutesleft">minutesleft</span> <br>
            </div>

            <div class="pie pie-minutes">
                <div class="clip1">
                    <div class="slice1"></div>
                </div>
                <div class="clip2">
                    <div class="slice2"></div>
                </div>
                <div class="status"></div>
            </div>
        </div>
        <div class="block-timer">
            <div class="bloc-timer-text">
                hours left: <span id="hoursleft">hoursleft</span> <br>
            </div>

            <div class="pie pie-hours">
                <div class="clip1">
                    <div class="slice1"></div>
                </div>
                <div class="clip2">
                    <div class="slice2"></div>
                </div>
                <div class="status"></div>
            </div>
        </div>
        <div class="block-timer">
            <div class="bloc-timer-text">
                day left: <span id="day">day</span><br>

            </div>
            <div class="bloc-timer-text">
                persent : <span id="persent">persent </span><br>
            </div>
            <div class="pie pie-percent">
                <div class="clip1">
                    <div class="slice1-color">

                    </div>
                </div>
                <div class="clip2">
                    <div class="slice2-color">

                    </div>

                </div>
                <div class="status"></div>
            </div>
        </div>

        <div class="block-timer">
            <div class="bloc-timer-text">
                <div class="clear-whit">
                    sec left all: <span id="sec">sec </span><br>
                    min left all: <span id="min">min </span><br>
                    hours left all: <span id="hours">hours </span><br>
                </div>

            </div>
        </div>



    </div>
</main>

</body>
</html>