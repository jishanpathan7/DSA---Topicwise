# implement a function that takes a string
#that consists of lowercase letters and digits and returns a string that consisits of all digits and lowercase
# English lette that are not present in the string.
# The digits should come first, in ascendng order, followed by characters, also in ascending order.

#Example:
# s = "7895interdisciplinary12"

# the returned string is "0346bfghijkmoquvwxz". it contains all missing didigts in ascending order, followed by missing characters in ascending order.

# Function description:
# complete the function missing_characters in the editor below.
# missing_characters has the following parameter(s):
# s: a string that consists of lowercase letters and digits

# return
# string: a string as described above.

def missing_characters(s):
    # Write your code here
    digits = []
    characters = []
    for i in s:
        if i.isdigit():
            digits.append(i)
        else:
            characters.append(i)
    digits.sort()
    characters.sort()
    return ''.join(digits) + ''.join(characters)


# Test Cases:
print(missing_characters("7895interdisciplinary12")) # "0346bfghijkmoquvwxz"
print(missing_characters("0123456789")) # "0123456789"
