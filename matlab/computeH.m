function [ H2to1 ] = computeH( x1, x2 )
%COMPUTEH Computes the homography between two sets of points
[len1, ~] = size(x1);
[len2, ~] = size(x2);
A = zeros(2*min(len1, len2), 9);
for i = 1:min(len1, len2)
    A(i*2-1:i*2, :) = [x2(i, 1) x2(i, 2) 1 0 0 0 -x2(i, 1)*x1(i, 1) -x2(i, 2)*x1(i, 1) -x1(i, 1);
                       0 0 0 x2(i, 1) x2(i, 2) 1 -x2(i, 1)*x1(i, 2) -x2(i, 2)*x1(i, 2) -x1(i, 2)];                   
end

[~, ~, V] = svd(A);
H = V(:, 9);
H2to1 = reshape(H, [3, 3])';

end
