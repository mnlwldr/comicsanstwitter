link = document.createElement("link");
link.href = browser.extension.getURL("sheet.css");
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);