url1 = 'http://<ip address>/cam1.jpg';
url2 = 'http://<ip address>/cam2.jpg';

ss1 = imread(url1);
ss2 = imread(url2);

fh1 = image(ss1);
fh2 = image(ss2);

while(1)
    ss1p = ss1;
    ss2p = ss2;
    
    ss1 = imread(url1);
    ss2 = imread(url2);
	
    set(fh1,'CData',ss1);
	set(fh2,'CData',ss2);
    
    [result] = testScript(fh1, fh2);
    imshow(result);
end