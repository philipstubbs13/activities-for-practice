def get_student_information():
    # Prompt user for student's identification information...
    name = input('Please enter the student\'s name. ')
    phone_number = input('Please enter the student\'s phone_number. ')

    return [name, phone_number]

def create_student(**student):
    """
    A triple-quoted string at the top of a function is called a docstring. It
    provides documentation on how a function works, and how to use it.

    create_student creates a student dictionary with the data contained in the
    information array. The data are assumed to arrive in the order suggested
    in the call to fromkeys. 

    Do you anticipate any problems with this design? Why? Can you make it more
    robust?
    """

    _student = dict.fromkeys(['name', 'phone_number'])

    _student['name'] = student.get('name', 'N/A')
    _student['phone_number'] = student.get('phone_number', 'N/A')

    return _student

def print_student(student):
    print('You\'ve entered:')

    print_separator()

    for key, value in student.items():
        print('The student\'s {0} is {1}.'.format(key, value))

    print_separator()

def print_separator(repetitions = 18):
   print('-' * repetitions)
