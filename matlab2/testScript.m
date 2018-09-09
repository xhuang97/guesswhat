function [result] = testScript(img1, img2)

%datadir     = 'testData';    %the directory containing the images 
%resultsdir  = 'testResult'; %the directory for dumping results

%img1 = imread(sprintf('%s/blackboard4.jpg', datadir));
%img2 = imread(sprintf('%s/blackboard3.jpg', datadir));

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% STEPS 1-3: In processFrame
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
[mask1, pX1, pY1] = processFrame(img1);
[mask2, pX2, pY2] = processFrame(img2);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% STEP 4: HOMOGRAPHY 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%% STEP 4a: FIND HOMOGRAPHIES FOR BOTH IMAGES TO SAME SIZED RECTANGLE
width = 4;
height = 3;
r = width / height;

board1 = polyshape(pX1, pY1); board2 = polyshape(pX2, pY2);

[x1, y1] = centroid(board1); [x2, y2] = centroid(board2);
A1 = area(board1);            A2 = area(board2);
desiredArea = sqrt(A1 * A2);

desiredWidth = sqrt(desiredArea * r);
desiredHeight = sqrt(desiredArea / r);

dW = desiredWidth / 2;
dH = desiredHeight / 2;

p11 = [pX1(1), pY1(1);   pX1(2), pY1(2);   pX1(3), pY1(3);   pX1(4), pY1(4)]
p12 = [x1-dW/2, y1-dH/2; x1+dW/2, y1-dH/2; x1+dW/2, y1+dH/2; x1-dW/2, y1+dH/2]
H1 = computeH(p12, p11);

p21 = [pX2(1), pY2(1);   pX2(2), pY2(2);   pX2(3), pY2(3);   pX2(4), pY2(4)]
p22 = [x2-dW/2, y2-dH/2; x2+dW/2, y2-dH/2; x2+dW/2, y2+dH/2; x2-dW/2, y2+dH/2]
H2 = computeH(p22, p21);


%% STEP 4b: MASK IMAGES AND USE HOMOGRAPHY ON BOTH
img1N = img1 .* mask1;
img2N = img2 .* mask2;

img1Rect = warpH(img1N, H1, size(img1));
img2Rect = warpH(img2N, H2, size(img2));

I1 = img1Rect(y1-dH/2:y1+dH/2, x1-dW/2:x1+dW/2, :);
I2 = img2Rect(y2-dH/2:y2+dH/2, x2-dW/2:x2+dW/2, :);

%figure, imshow(I1);
%figure, imshow(I2);


%% STEP 4c: COMBINE IMAGES BASED ON TIME RECEIVED
%           Must be done later as this is will be one big function most likely
I1gray = rgb2gray(I1);
I2gray = rgb2gray(I2);

%figure, imshow(I1gray);
%figure, imshow(I2gray);

points1 = detectFASTFeatures(I1gray);
points2 = detectFASTFeatures(I2gray);

[features1,validPoints1] = extractFeatures(I1gray,points1);
[features2,validPoints2] = extractFeatures(I2gray,points2);

indexPairs = matchFeatures(features1,features2);
matchedPoints1 = validPoints1(indexPairs(:,1),:);
matchedPoints2 = validPoints2(indexPairs(:,2),:);

if length(matchedPoints1) > 4
    [bestH2to1, inliers] = computeH_ransac(matchedPoints1.Location, matchedPoints2.Location);
    result = imfuse(I1, warpH(I2, double(bestH2to1), size(I1)), 'Scaling', 'joint', 'method', 'blend');
else 
    result = imfuse(I1, I2, 'Scaling', 'joint', 'method', 'blend'); 
end 