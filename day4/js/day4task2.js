


var node = document.createElement("div");
var img = document.createElement("img");

  img.setAttribute("src","https://uploads-ssl.webflow.com/5d2372f5be882751d7af3abb/60d9ff0db4fdd03b306b8dff_website%20video-poster-00001.jpg")
  img.style.width="200px";

  

document.body.appendChild(node);


var img1 = document.createElement("img");

img1.setAttribute("src","https://pyxis.nymag.com/v1/imgs/f3e/ea4/ecbc12f798c38b218f507befdf16e94cb3-STRANGE-WORLD.rhorizontal.w700.jpg")
img1.style.width="200px";


node.append(img);
node.append(img1);

img1.insertBefore(img1, img.children[0]);











