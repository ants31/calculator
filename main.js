<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 18.0px 0.0px; font: 18.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 18.0px 0.0px; font: 18.0px Times; -webkit-text-stroke: #000000; min-height: 23.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const { app, BrowserWindow } = require('electron');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">function createWindow() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>const win = new BrowserWindow({</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>width: 420,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>height: 720,</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>resizable: false</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">  </span>win.loadFile('index.html');</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">app.whenReady().then(createWindow);</span></p>
</body>
</html>
