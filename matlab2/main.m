%url1 = 'http://192.168.137.146:8080/shot.jpg';
%url2 = 'http://192.168.137.186:8080/shot.jpg';
url1 = 'streamData2/cam1_1p.jpg';
url2 = 'streamData2/cam2_1p.jpg';
disp('hi there');

ss1 = imread(url1);
ss2 = imread(url2);
disp('it is me');

fh1 = image(ss1);
fh2 = image(ss2);
disp('general kenobi');

[result] = testScript(ss1, ss2);
figure, imshow(result);

%while(1)
for i = 2:5
    ss1p = ss1;
    ss2p = ss2;
    
    %[ss1, map1] = imread(url1);
    %[ss2, map2] = imread(url2);
    
    [ss1, map1] = imread(sprintf('streamData2/cam1_%dp.jpg', i));
    [ss2, map2] = imread(sprintf('streamData2/cam2_%dp.jpg', i));
    disp('hi');
    
    %imwrite(ss1, sprintf('streamData3/cam1_%d.jpg', i));
    %imwrite(ss2, sprintf('streamData3/cam1_%d.jpg', i));
    
    [result] = testScript(ss1, ss2);
    figure, imshow(result);
    pause(1);
end