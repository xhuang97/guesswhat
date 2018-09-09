function [mask, x, y] = processFrame( img )

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% STEP 1: HOUGH TRANSFORM
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

[hlines] = findBlackBoardEdges( img );
theta = [hlines(1).theta hlines(2).theta hlines(3).theta hlines(4).theta];

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% STEP 2: CALCULATE CORNER POINTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
[~, I] = sort(abs(theta));
hlines = hlines(I);

for i = 1:4
    hlines(i).point1 = hlines(i).point1;
    hlines(i).point2 = hlines(i).point2;
end
verM = [(hlines(1).point1(2) - hlines(1).point2(2)) / (hlines(1).point1(1) - hlines(1).point2(1)), ...
        (hlines(2).point1(2) - hlines(2).point2(2)) / (hlines(2).point1(1) - hlines(2).point2(1))];
verB = [hlines(1).point1(2) - verM(1) * hlines(1).point1(1), ...
        hlines(2).point1(2) - verM(2) * hlines(2).point1(1)];
horM = [(hlines(3).point1(2) - hlines(3).point2(2)) / (hlines(3).point1(1) - hlines(3).point2(1)), ...
        (hlines(4).point1(2) - hlines(4).point2(2)) / (hlines(4).point1(1) - hlines(4).point2(1))];
horB = [hlines(3).point1(2) - horM(1) * hlines(3).point1(1), ...
        hlines(4).point1(2) - horM(2) * hlines(4).point1(1)];
    
x = [0, 0, 0, 0];
y = [0, 0, 0, 0];
for i = 1:2
	for j = 1:2
		x(i*2+j-2) = (verB(i) - horB(j))/(horM(j) - verM(i));
		y(i*2+j-2) = x(i*2+j-2) * horM(j) + horB(j);
	end
end

%plot(x(1),y(1),'x','LineWidth',2,'Color','yellow');
%plot(x(2),y(2),'x','LineWidth',2,'Color','red');
%plot(x(3),y(3),'x','LineWidth',2,'Color','yellow');
%plot(x(4),y(4),'x','LineWidth',2,'Color','red');

xCenter = mean(x);
yCenter = mean(y);

angles = atan2d(y-yCenter, x-xCenter);

[A, sortedIndexes] = sort(angles);
x = x(sortedIndexes);  % Reorder x and y with the new sort order.
y = y(sortedIndexes);



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% STEP 3: REMOVING OBSTRUCTIONS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
[sortX] = sort(x);
[sortY] = sort(y);

minX = sortX(1); maxX = sortX(4);
minY = sortY(1); maxY = sortY(4);

%% STEP 3a: CONTOURING
imgT = imgaussfilt(img, 16);
imgT = imgaussfilt(imgT, 16);

if (ndims(imgT) == 3)
    imgT = rgb2gray(imgT);
end

sigma = 1.5;
W = gradientweight(imgT, sigma, 'RolloffFactor', 3, 'WeightCutoff', 0.25);
C = round(sortX(2)+40); R = round(sortY(2)+40);
thresh = 0.1;
[bw, ~] = imsegfmm(W, C, R, thresh);
%figure, imshow(bw);

%% STEP 3c: REFINE THE MASK
bwp = bwareafilt(~bw, [20, 1000000]);
%figure, imshow(bw + bwp);

mask = uint8(bw + bwp);
%figure, imshow(img.*uint8(repmat(mask,[1,1,3])));

end
