#!/usr/bin/python3

#!/usr/bin/python3

from helpers import *

###############################################################################
#
# BRIEF //
#   Our script is coming together, but could use some organization.  We've 
#   collected a few of the standout challenges for you below. There's
#   ample opportunity for refactoring beyond this, though, so feel free to get 
#   creative.
#
#   Note that only the first three of these are required. But, you're free 
#   and encouraged to tackle the last three if you finish early!
#
#     1. Refactor your code to collect input from the user, then create a 
#        function which creates and returns the student dict.
#
#     2. Create a function that encapsulates the for loops for printing 
#        an individual student's information.
#
#     3. Create a function that prints a yes/no confirmation message to the 
#        screen, and returns True if the user enters Y (or y).
#
#     4. If you have time, wrap all the calls to input in a function called
#        get_student_information, or something similar. Return an array 
#        containing user input. 
#
#     5. If you have time, wrap up all the code that prints a summary into its
#        own function.
#
#     6. If you finish early, Google Python modules. Try and pull your 
#        functions if you're feeling lucky. If not, just sit tight. We'll 
#        discuss this during review.
#
###############################################################################

# BRIEF //
#   The student script from last time was a good first-pass. Now, it's time to
#   make it a bit more robust.
#
#   To start, refactor such that all of your prompts occur within a loop, which
#   doesn't break until the user indicates the information they entered is 
#   correct. Only print the information after their confirmation.
#
#   Next, refactor your program such that, after users confirm that they've
#   entered the correct information, your program prompts them as to whether 
#   they'd like to enter information for additional students.
#   
#     1. As an "easy" challenge, simply allow them to enter the values again,
#        and print the information after they confirm it's correct.
#
#     2. Your recommended challenge is to store student information in a dict,
#        and create a new one for each student the user adds. Store these
#        students in a list, and print the entire list when the user declines
#        to add additional students.


# "Global" students list.
students = []

while True:

    # Get information and assign via unpacking. Order matters
    name, phone_number = get_student_information()

    # Create a student by passing kwargs. We can do this with positional 
    # arguments, as well, but is arguably more rebust
    student = create_student(name = name, phone_number = phone_number)

    print_student(student)
    
    # Print a separator...
    # print('-' * 18)
    
    # # Print all to the console...
    # for key, value in student.items():
    #     print('The student\'s {0} is {1}.'.format(key, value))
    
    # # Print a separator...
    # print('-' * 18)
    
    # # Prompt for confirmation. Use lower so users can enter either Y or y.
    # if input('Is this information correct? (Y/n) ').lower() == 'y':
    #     students.append(student)
    #     print(students)

    #     # Prompt users to add more student information.
    #     if input ('Would you like to input another student\'s information? (Y/n)').lower() == 'y':
    #         continue
    #     else:
    #         print('You\'ve entered the following student profiles:')

    #         print('-' * 18)

    #         # Print information for every student in the list.
    #         for student in students:
    #             for key, value in student.items():
    #                 print('The student\'s {0} is {1}.'.format(key, value))

    #         print('-' * 18)

    #         break
