function [result, minDistp, minDistq] = doesIntersect(p1, p2, q1, q2)
    m1 = (p2(2) - p1(2)) / (p2(1) - p1(1)); 
    b1 = p1(2) - m1 * p1(1);
    
    m2 = (q2(2) - q1(2)) / (q2(1) - q1(1)); 
    b2 = q1(2) - m2 * q1(1);
    
    xR = (b2 - b1)/(m1 - m2);
    yR = xR * m1 + b1;
    
    %distX = abs(p1(1) - p2(1));
    %distY = abs(p1(2) - p2(2));
    result = ((p1(1) - xR)*(p2(1) - xR) < 0) || ...
              (sqrt((p1(1) - q1(1))^2 + (p1(2) - q1(2))^2) < 30 || ...
               sqrt((p1(1) - q2(1))^2 + (p1(2) - q2(2))^2) < 30 || ...
               sqrt((p2(1) - q1(1))^2 + (p2(2) - q1(2))^2) < 30 || ...
               sqrt((p2(1) - q2(1))^2 + (p2(2) - q2(2))^2) < 30);
    
    px = [p1(1) p2(1)]; qx = [q1(1) q2(1)];
    py = [p1(2) p2(2)]; qy = [q1(2) q2(2)];
    minDistp = min(sqrt((px-xR).^2 + (py-yR).^2));
    minDistq = min(sqrt((qx-xR).^2 + (qy-yR).^2));
end