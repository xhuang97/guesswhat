function [ bestH2to1, inliers] = computeH_ransac( locs1, locs2)
%COMPUTEH_RANSAC A method to compute the best fitting homography given a
%list of matching points.

%% Set Parametrs
num = length(locs1);
e = 0.6;
s = 4;
p = 0.9;
N = log(1-p)/log(1-(1-e)^s);
threshold = 100;             %euclidean distance squared
                             %This is for Charizard, Harry Potter was 100

bestH2to1 = zeros(3, 3);
bestCounter = 0;
locs1 = horzcat(locs1, ones([length(locs1), 1]));
locs2 = horzcat(locs2, ones([length(locs2), 1]));
inliers = zeros(num, 1);

for i = 1:N
    index = randi([1, length(locs1)], [4, 1]);
    H2to1 = computeH_norm(locs1(index, 1:2), locs2(index, 1:2));
    locs2_H = (H2to1*locs2')';
    locs2_f = bsxfun(@rdivide, locs2_H, locs2_H(:, 3));
    
    diff = locs1 - locs2_f;
    dist = sum(diff.^2, 2);
    in_T = dist < threshold;
    
    if sum(in_T) > bestCounter
        bestCounter = sum(in_T);
        inliers = in_T;
        bestH2to1 = H2to1;
    end
end

%Q2.2.3
end

