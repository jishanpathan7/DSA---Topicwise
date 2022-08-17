#implement two classes:

#Rectangle class
#The constructor for Rectangle must take two arguments that denote the lengths of the rectangle's sides.
#The class should have a method called area that returns the area of the rectangle.

#Circle class
#The constructor for Circle must take a single argument that denotes the circle's radius.
#The class should have a method called area that returns the area of the circle, use a precise Pi value, preferably the constat math.pi.

#your implementation of all the classes will be tested by a provided code stub on several input files.

#constraints:
#1. You must use the Python language.
#  1 <= the number of queries in one test file <= 10^5
#  1 <= the value of all parameters passed to the construct he objects <= 10^3

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width


class Circle:
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius ** 2
    


