# HackYourFuture course / HTML-CSS / Week number 1
<a href="http://htmlpreview.github.io/?https://github.com/asksmith/HTML-CSS/blob/main/week1/prep-exercises/bird.html">Bird (pure HTML + CSS)</a>
<br>
<a href="https://github.com/asksmith/HTML-CSS/blob/main/week1/prep-exercises/bird.html">Bird (pure HTML+CSS) code</a>
<br>
<a href="http://htmlpreview.github.io/?https://github.com/asksmith/HTML-CSS/blob/main/week1/digital-resume/cv.html">Digital Resume</a>
<br>
<a href="https://github.com/asksmith/HTML-CSS/blob/main/week1/digital-resume/cv.html">Digital Resume code</a>

<b>1.1. How do I create a hidden file or folder? </b>

Name of a file or a directory should start with a dot character. <br>

To create a “hidden” directory you should use command “mkdir”, for example: <br>
<i>$mkdir “.myHiddenDirectory”</i><br>

To create “hidden” file you could use “touch” command, for example: <br>
<i>$touch “.myHiddenFile”</i><br>

<b>1.2. How do I display it in the CLI?</b>
You could use command “ls” with a argument “-a” (show all files), for example:<br>
<i>$ls -a</il>

2. How do I create multiple nested directories, like /c/Users/myusername/these/folders/are/just/for/fun?

You should use command “mkdir” with an argument “-p” (Create intermediate directories as required), for example:
<i>$mkdir -p “these/folders/are/just/for/fun” </i>

3. How do I append a message to a file, without a newline character, so the output would be…

There are many ways to do that, for instance, you could use “echo” command with an argument “-n” (Do not print the trailing newline character) like that:

<i>$echo “first message\nsecond message\n”>>file.txt</i>

And there are many more, for instance “printf” command, etc...
