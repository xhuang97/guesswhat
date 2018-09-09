function [H2to1] = computeH_norm(x1, x2)
%% Compute centroids of the points
[len1, ~] = size(x1);
[len2, ~] = size(x2);
centroid1 = sum(x1)/len1;
centroid2 = sum(x2)/len2;

%% Shift the origin of the points to the centroid
x1_sh = x1 - repmat(centroid1, len1, 1);
x2_sh = x2 - repmat(centroid2, len2, 1);

%% Normalize the points so that the largest distance from the origin is equal to sqrt(2).
sc1 = [1/max(abs(x1_sh(:, 1))) 1/max(abs(x1_sh(:, 2)))];
sc2 = [1/max(abs(x2_sh(:, 1))) 1/max(abs(x2_sh(:, 2)))];
x1_sc = [x1_sh(:, 1)*sc1(1) x1_sh(:, 2)*sc1(2)];
x2_sc = [x2_sh(:, 1)*sc2(1) x2_sh(:, 2)*sc2(2)];

%% similarity transform 1
T1 = [sc1(1) 0 0; 0 sc1(2) 0; 0 0 1]*[1 0 -centroid1(1); 0 1 -centroid1(2); 0 0 1];

%% similarity transform 2
T2 = [sc2(1) 0 0; 0 sc2(2) 0; 0 0 1]*[1 0 -centroid2(1); 0 1 -centroid2(2); 0 0 1];

%% Compute Homography
H_norm = computeH(x1_sc, x2_sc);

%% Denormalization
H2to1 = inv(T1)*H_norm*T2;
