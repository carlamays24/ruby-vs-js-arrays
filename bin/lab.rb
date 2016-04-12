## Lab 1 ##

# Use `Array.new` to create a Ruby Array with ten elements
# where elements are equal to their index multiplied by 2.
# Store the result and display it on the console with `p <array name>`


a = [1,2,3,4,5,6,8,9]

b = a.map! {|x| x*2}

## Lab 2 ##

# Assign `20` to the element at `length+1`.


b.insert(a.length,20)

# Access the 3rd element from the end of an array length of 5.

# Access element 9 for a length of 5 elements.

# Assign `[-12, -49]` to the 5th element from the end for a length of 3.

# Access all the elements starting at index 1.

binding.pry
""
