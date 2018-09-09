function [hlines] = findBlackBoardEdges(img)

[height, width, ~] = size(img);
imgT = imgaussfilt(img, 4);
%imgT = imgaussfilt(img, 16);
%imgT = imresize(imgT, 0.25);

%% STEP 1a: FINDING HOUGH LINES
if (ndims(img) == 3)
    imgT = rgb2gray(imgT);
end
%[Gx,Gy] = imgradientxy(imgT);
[Gx,~] = imgradient(imgT);

Gmag = (Gx / 255) > 0.07;

[H, theta, rho] = hough(Gmag, 'RhoResolution',5,'Theta',-90:2:89);
peaks = houghpeaks(H, 50,'threshold',ceil(0.3*max(H(:))));
hlines = houghlines(Gmag, theta, rho, peaks, 'FillGap',20, 'MinLength', 300);

%% STEP 1b: FINDING APPROPRIATE BORDER LINES
keep = repelem(1, length(hlines));
angles = zeros(length(hlines));
interX = zeros(length(hlines));
interY = zeros(length(hlines));
indices = [];

for i = 1:(length(hlines)-1)
    %indices = [indices, i];
    %if abs(hlines(i).point1(2) - hlines(i).point2(2)) > height - 20 || ...
    %   abs(hlines(i).point1(1) - hlines(i).point2(1)) > width - 20
    %    keep(i) = 0;
    %end
    
    if keep(i) == 1  
        temp = width + 0.1;
        indices = [indices, i];
        for j = (i+1):length(hlines)
            [inter, p, angle] = doesIntersect(hlines(i).point1, hlines(i).point2, ...
                                              hlines(j).point1, hlines(j).point2); 
            if keep(j) == 1 
                if (abs(hlines(i).theta - hlines(j).theta) < 20 || ...
                    abs(hlines(i).theta) + abs(hlines(j).theta) > 160) ...
                   && (inter)
                    %fprintf('%f %f\n', hlines(i).theta, hlines(j).theta)
                    keep(j) = 0;
                end
            end
            
            interX(i, j) = p(1); interX(j, i) = p(1); 
            interY(i, j) = p(2); interY(j, i) = p(2); 
            angles(i, j) = angle; angles(j, i) = angle; 
        end
    end
end

disp(angles);

best = [1, 2, 3, 4];
leastDev = 1000;
for i = 1:length(indices) - 3
    for j = i+1:length(indices) - 2
        for k = j+1:length(indices) - 1
            for l = k+1:length(indices) 
                indicesT = [indices(i), indices(j), indices(k), indices(l)];
                hlinesT = [hlines(indicesT)];
                theta = [hlinesT(1).theta hlinesT(2).theta hlinesT(3).theta hlinesT(4).theta];

                [~, sortedI] = sort(abs(theta));
                quadangles = [angles(indicesT(sortedI(1)), indicesT(sortedI(3))), ...
                              angles(indicesT(sortedI(1)), indicesT(sortedI(4))), ...
                              angles(indicesT(sortedI(2)), indicesT(sortedI(3))), ...
                              angles(indicesT(sortedI(2)), indicesT(sortedI(4)))];
                x = [interX(indicesT(sortedI(1)), indicesT(sortedI(3))), ...
                     interX(indicesT(sortedI(1)), indicesT(sortedI(4))), ...
                     interX(indicesT(sortedI(2)), indicesT(sortedI(3))), ...
                     interX(indicesT(sortedI(2)), indicesT(sortedI(4)))];
                y = [interY(indicesT(sortedI(1)), indicesT(sortedI(3))), ...
                     interY(indicesT(sortedI(1)), indicesT(sortedI(4))), ...
                     interY(indicesT(sortedI(2)), indicesT(sortedI(3))), ...
                     interY(indicesT(sortedI(2)), indicesT(sortedI(4)))];
                xCenter = mean(x);
                yCenter = mean(y);
                
                disp([xCenter, yCenter]);
                if sqrt((xCenter-width/2)*(xCenter-width/2) + (yCenter-height/2)*(yCenter-height/2)) ...
                        < 50 && ...
                   max(y) - yCenter > 150
                    dev = 0;
                    for z = 1:4 
                        dev = dev + abs(quadangles(z) - pi/2);
                    end
                    if dev < leastDev
                        leastDev = dev;
                        best = indicesT;
                    end
                end
            end
        end
    end    
end
disp(best)

hlines = [hlines(best(1)), hlines(best(2)), hlines(best(3)), hlines(best(4))];
%hlines = hlines(indices);
figure, imshow(img), hold on
for i = 1:length(hlines)
   xy = [hlines(i).point1; hlines(i).point2];
   plot(xy(:,1),xy(:,2),'LineWidth',2,'Color','green');

   % Plot beginnings and ends of lines
   %plot(xy(1,1),xy(1,2),'x','LineWidth',2,'Color','yellow');
   %plot(xy(2,1),xy(2,2),'x','LineWidth',2,'Color','red');
   
   % IF NEEDED: Find top four lines in terms of length
end