img = imread('testData/blackboard4.jpg');
img = imgaussfilt(img,8);
img = imresize(img, 0.25);

[height, width] = size(img);

% STEP 1a: FINDING HOUGH LINES
if (ndims(img) == 3)
    img = rgb2gray(img);
end
figure, imshow(img);
[Gx,Gy] = imgradientxy(img);
Gmag = (Gx / 255) > 0.03;

figure, imshow(Gmag);
[H, theta, rho] = hough(Gmag, 'RhoResolution',5,'Theta',-90:1:89);
peaks = houghpeaks(H,20,'threshold', ceil(0.3*max(H(:))));
hlines = houghlines(Gmag, theta, rho, peaks, 'FillGap',10, 'MinLength', 200);

keep = repelem(1, length(hlines));
mindist = [repelem(width, length(hlines))];
indices = [];
for i = 1:length(hlines)
    if abs(hlines(i).point1(2) - hlines(i).point2(2)) > height - 20 || ...
       abs(hlines(i).point1(1) - hlines(i).point2(1)) > width - 20
        keep(i) = 0;
    end
    
    if keep(i) == 1  
        temp = width + 0.1;
        indices = [indices, i];
        for j = i+1:length(hlines)
            % disp(lines(i).point1(1));
            % disp(lines(i).point1(2));
            [int, minDisti, minDistj] = doesIntersect(hlines(i).point1, hlines(i).point2, ...
                                                      hlines(j).point1, hlines(j).point2); 
            if keep(j) == 1 && abs(hlines(i).theta - hlines(j).theta) < 20 && int
                keep(j) = 0;
            end
            mindist(i) = min([mindist(i), minDisti]);
            mindist(j) = min([mindist(j), minDistj]);
        end
    end
end

figure, imshow(Gmag), hold on

[B, I] = sort(mindist(indices));
hlines = hlines(indices(I(1:4)));
disp(B(1:4));
for i = 1:length(hlines)
   xy = [hlines(i).point1; hlines(i).point2];
   plot(xy(:,1),xy(:,2),'LineWidth',2,'Color','green');

   % Plot beginnings and ends of lines
   %plot(xy(1,1),xy(1,2),'x','LineWidth',2,'Color','yellow');
   %plot(xy(2,1),xy(2,2),'x','LineWidth',2,'Color','red');
   
   % IF NEEDED: Find top four lines in terms of length
end