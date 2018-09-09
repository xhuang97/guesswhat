function [result, p, theta] = doesIntersect(p1, p2, q1, q2)
    m1 = (p2(2) - p1(2)) / (p2(1) - p1(1)); 
    b1 = p1(2) - m1 * p1(1);
   
    m2 = (q2(2) - q1(2)) / (q2(1) - q1(1)); 
    b2 = q1(2) - m2 * q1(1);
    
    xR = (b2 - b1)/(m1 - m2);
    yR = xR * m1 + b1;
    p = [xR, yR];
    
    x12 = p1(1)-xR;  y12 = p1(2)-yR;
    x32 = q1(1)-xR;  y32 = q1(2)-yR;
    theta = atan2(abs(x12*y32-x32*y12),x12*x32+y12*y32);
    disp([p1(1), p1(2), xR, yR, q1(1), q1(2), theta]);
    sprintf('/n');

    result = ((p1(1) - xR)*(p2(1) - xR) < 0 && (p1(2) - yR)*(p2(2) - yR) < 0) || ...
              (sqrt((p1(1) - q1(1))^2 + (p1(2) - q1(2))^2) < 30 || ...
               sqrt((p1(1) - q2(1))^2 + (p1(2) - q2(2))^2) < 30 || ...
               sqrt((p2(1) - q1(1))^2 + (p2(2) - q1(2))^2) < 30 || ...
               sqrt((p2(1) - q2(1))^2 + (p2(2) - q2(2))^2) < 30);
end