# writing programs involves breaking
down a problem into individual, detailed steps. Similarly, when debugging
programs (that is, finding and fixing errors), you’ll patiently observe what
the program is doing and find the cause of the bugs. And like all skills, the
more you program, the better you’ll become.


# A shell is a program that lets you
type instructions into the computer, much like the Terminal or Command
Prompt on OS X and Windows, respectively. Python’s interactive shell lets
you enter instructions for the Python interpreter software to run. The com-
puter reads the instructions you enter and runs them immediately


# How to Find Help
Solving programming problems on your own is easier than you might
think. If you’re not convinced, then let’s cause an error on purpose: Enter
'42' + 3 into the interactive shell. You don’t need to know what this instruc-
tion means right now, but the result should look like this:

You’ll often find that someone else had the same question as you and
that some other helpful person has already answered it. No one person can
know everything about programming, so an everyday part of any software
developer’s job is looking up answers to technical questions.

# Asking Smart Programming Questions
If you can’t find the answer by searching online, try asking people in a
web forum such as Stack Overlow (http://stackoverflow.com/) or the “learn
programming” subreddit at http://reddit.com/r/learnprogramming/. But keep
in mind there are smart ways to ask programming questions that help
others help you. Be sure to read the Frequently Asked Questions sections
these websites have about the proper way to post questions.

# When asking programming questions, remember to do the following:
- Explain what you are trying to do, not just what you did. This lets your
helper know if you are on the wrong track.
- Specify the point at which the error happens. Does it occur at the very
start of the program or only after you do a certain action?
- Copy and paste the entire error message and your code to http://pastebin
.com/ or http://gist.github.com/.
These websites make it easy to share large amounts of code with
people over the Web, without the risk of losing any text formatting. 
- You can then put the URL of the posted code in your email or forum post.
For example, here some pieces of code I’ve posted: http://pastebin.com/
SzP2DbFx/ and https://gist.github.com/asweigart/6912168/.
- Explain what you’ve already tried to do to solve your problem. This tells
people you’ve already put in some work to figure things out on your own.
- List the version of Python you’re using. (There are some key differ-
ences between version 2 Python interpreters and version 3 Python
interpreters.)
- Also, say which operating system and version you’re running.
- If the error came up after you made a change to your code, explain
exactly what you changed.
- Say whether you’re able to reproduce the error every time you run the
program or whether it happens only after you perform certain actions.
Explain what those actions are, if so.
- Always follow good online etiquette as well. For example, don’t post
your questions in all caps or make unreasonable demands of the people
trying to help you.


# Summary
For most people, their computer is just an appliance instead of a tool. But
by learning how to program, you’ll gain access to one of the most powerful
tools of the modern world, and you’ll have fun along the way. Programming
isn’t brain surgery—it’s fine for amateurs to experiment and make mistakes.
I love helping people discover Python. I write programming tutorials
on my blog at http://inventwithpython.com/blog/, and you can contact me with
questions at al@inventwithpython.com.
This book will start you off from zero programming knowledge, but
you may have questions beyond its scope. Remember that asking effective
questions and knowing how to find answers are invaluable tools on your
programming journey.
Let’s begin!

# Entering Expressions into the Interactive Shell

# The print() Function
The print() function displays the string value inside the parentheses on the
screen.

# The input() Function
The input() function waits for the user to type some text on the keyboard
and press enter .
# The str(), int(), and float() Functions




---
sidebar_position: 2
---

# Laying the Foundation 

Day 1-2: Foundations and Essentials

As the sun rises on your coding journey, You're not alone – you're surrounded by fellow explorers, eager to uncover the magic of programming. With curiosity as your compass and determination as your guide, you're about to embark on an adventure that will reshape the way you perceive technology.

# 🌟 The Magical Setup

Picture this: you're about to embark on a grand expedition. But before you set off, you need the right gear – **your development environment**. Think of it as your digital backpack, filled with tools that'll make your journey smooth. Setting up is as easy as preparing for a field trip – [download Python](https://www.python.org/downloads/), your coding companion, and get ready to step into a world of possibilities.

# 💡 The Digital Expedition

Just like a seasoned explorer equips themselves with the best gear, a programmer sets up their digital toolkit. Downloading Python is like gathering essential supplies for your journey.


This part has a few examples that encourage you to type into the interactive shell, which lets you execute Python instructions one at a time
and shows you the results instantly. Using the interactive shell is great for learning what basic Python instructions do, so give it a try as you follow
along. 

> You’ll remember the things you do much better than the things you only read.

# Errors Are Okay !
Programs will crash if they contain code the computer can’t understand, which
will cause Python to show an error message. An error message won’t break
your computer, though, so don’t be afraid to make mistakes. A crash just means
the program stopped running unexpectedly.

Python as a programming language, just like the grammar rules that help us communicate.
Here’s an example:
1. This is a grammatically correct English sentence. 
2. This grammatically is sentence not English correct a.

The second line is difficult to parse because it doesn’t follow the rules
of English. Similarly, if you type in a bad Python instruction, Python won’t
be able to understand it and will display a SyntaxError error message, as

You can always test to see whether an instruction works by typing it into the interactive shell. 
Don’t worry about breaking the computer: The worst thing that could happen is that Python responds with an error message.
Professional software developers get error messages while writing code allthe time.

# 🔑 The Language of Code

Imagine coding as learning a new language. Just like you adapt to different cultures, you'll dive into Python's syntax. It's like uncovering hidden symbols that make up a secret code. With syntax, you'll be able to communicate your ideas to the digital realm.

## Exploring Python Syntax and Keywords:
The Language of Code

Imagine stepping into a new country where the way people speak is unlike anything you've encountered before. Just like adapting to different cultures, you're about to delve into Python's syntax and keywords – the unique language that allows you to converse with computers.

# 🔍 Syntax: The Grammar of Python

In the realm of programming, **syntax is like grammar** – it defines the rules for constructing valid code. Just as using proper grammar ensures effective communication, adhering to Python's syntax rules ensures that your code is understandable to both humans and machines.

Python's **syntax** provides the structure for your code. It's like a recipe – a **set of instructions that the computer can follow to execute your commands accurately**. Each line of code is like a sentence, and just as you wouldn't expect a sentence without proper punctuation to make sense, code without correct syntax won't work as intended.

# 🕵️‍♂️ Keywords: The Special Vocabulary of Python

**Keywords** in Python are like special words reserved for specific purposes. They're the building blocks of Python's language – essential words that convey important instructions. Just as in any language, using keywords correctly is vital for effective communication.

### Python Keywords and Explanations

1. **False**: Represents the boolean value "false".
2. **None**: Represents a null or empty value.
3. **True**: Represents the boolean value "true".
4. **and**: Used for logical AND operation.
5. **as**: Used for creating an alias while importing modules or giving alternate names to variables.
6. **assert**: Used for debugging purposes to check if an expression is true, otherwise raises an exception.
7. **async**: Used to define asynchronous functions.
8. **await**: Used to pause execution in an asynchronous function until an awaited expression is complete.
9. **break**: Used to exit a loop prematurely.
10. **class**: Used to define a class.
11. **continue**: Used to skip the rest of the current iteration and move to the next iteration in a loop.
12. **def**: Used to define a function.
13. **del**: Used to delete references to objects, which can free up memory.
14. **elif**: Used in conditional statements as an "else if" block.
15. **else**: Used in conditional statements as a fallback block.
16. **except**: Used in try-except blocks to catch exceptions.
17. **finally**: Used in try-except blocks to specify code that will be executed regardless of whether an exception occurs.
18. **for**: Used to create a loop that iterates over a sequence.
19. **from**: Used to import specific attributes or modules from a module.
20. **global**: Used to indicate that a variable declared within a function should have global scope.
21. **if**: Used to create conditional statements.
22. **import**: Used to import modules or attributes from modules.
23. **in**: Used to check if a value is present in a sequence.
24. **is**: Used to compare object identities.
25. **lambda**: Used to create anonymous functions (functions without a name).
26. **nonlocal**: Used to indicate that a variable declared within a nested function should refer to a variable in the enclosing function.
27. **not**: Used for logical NOT operation.
28. **or**: Used for logical OR operation.
29. **pass**: Used as a placeholder for empty code blocks.
30. **raise**: Used to raise exceptions.
31. **return**: Used to return a value from a function.
32. **try**: Used to start a block of code that might raise exceptions.
33. **while**: Used to create a loop that continues as long as a condition is true.
34. **with**: Used for context management, ensuring proper resource management.
35. **yield**: Used in generator functions to yield a value to the caller.

**Note:** Python keywords cannot be used as **variable names**, **function names**, or any other **identifiers**. They have special meanings in the language and are reserved for specific purposes. We'll cover more about **variable** later in this guide.
 
### For example, 

consider the **if** keyword. It's like a sign post indicating that a decision is about to be made in your code. When Python encounters **if**, it knows that a condition is coming up, and it pays close attention to the rules that follow.

### Python's 'if' Keyword in Action

```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are an adult.")
else:
    print("You are not yet an adult.")
```

In this code, the if keyword signals that a condition is being evaluated. The colon : indicates the start of a code block that executes if the condition is met. The else keyword introduces an alternative path for code execution.

# 🚀 Why Syntax Matters: Communication with Computers

Just as learning a new spoken language opens doors to new experiences, mastering Python's syntax and keywords empowers you to create, innovate, and bring your ideas to life in the digital world. Syntax matters because it's the language that computers understand – your instructions must be precise and structured correctly for the computer to execute them accurately.

## Spacing in Python: The Art of Indentation

In Python, **spacing** – known as **indentation** – is crucial. Unlike other languages, Python uses indentation to define code blocks. 

It's like the way paragraphs and bullet points organize text. Indentation helps Python understand where a block of code starts and ends.

For example, consider our 'if' statement:

```python
if age >= 18:
    print("You are an adult.")
else:
    print("You are not yet an adult.")
```

Notice how the indented lines are within the 'if' and 'else' blocks. This indentation tells Python which code belongs to each condition.

>In the realm of programming, **syntax** is like the blueprint for constructing sentences, and **keywords** are the special words that drive the meaning. Adhering to syntax rules is crucial, just as using the right words is essential for effective communication.

# Variables, and Data Types: Crafting the Language of Code

As you step into the world of programming, imagine yourself as an artist with a blank canvas. Just like artists use colors to create masterpieces, programmers use **syntax**, **keywords**, **variables**, and **data types** to craft the language of code – a language that brings your ideas to life in the digital realm.

## 🔑 Variables: Holding the Essence of Information

Imagine stepping into a library filled with books of various genres. In programming, variables are like those bookshelves – they hold different kinds of information. Just as you label each bookshelf, you assign a name to each variable.

A **variable stores data** – it could be a number, a name, a temperature, or anything you want to work with. Just as you might rearrange books on shelves, you can manipulate and transform data using variables.

Example: Storing a Number in a Variable

```python
age = 25  # '**age (identifiers)**' is a **variable** that holds the value 25
```
A good variable name describes the data it contains. Imagine that you moved to a new house and labeled all of your moving boxes as Stuff. You’d
find it difficult to locate your individul items 

# Data Types: The Palette of Information

Consider a painter with a palette full of colors. Similarly, Python has a palette of **data types**, each suited for different kinds of information. 
These data types include **integers** (whole numbers), **floats** (numbers with decimals), **strings** (text), and more.

Think of each data type as a different color in your coding palette. Just as a painter selects the right color for a specific part of a painting, you'll choose the appropriate data type for the information you're working with.

# Using Different Data Types

```python
name = "ADAMU M. MUHAMMAD"       # 'name' holds text, so it's a **string**
temperature = 98.6   # 'temperature' is a number with decimals, so it's a **float**
age = 25             # 'age' is a whole number, so it's an **integer**
```

# 🚀 Crafting with Python's Tools

Python's **syntax**, **keywords**, **variables**, and **data types** are your tools. Just as an artist selects the right brush and color, you'll use the appropriate syntax and keywords to create functional code.

As you journey further, you'll discover how to mix and match variables and data types, creating intricate programs. Just as artists blend colors to create unique shades, you'll combine variables and data types to build intricate solutions.

code examples that demonstrate the use of Python's syntax, keywords, variables, and data types:

# Using Python's Syntax and Keywords:

```python
# Using if-else statement to determine if a number is positive or negative
number = float(input("Enter a number: "))

if number > 0:
    print("The number is positive.")
else:
    print("The number is negative or zero.")
```
# Working with Variables and Data Types:

```python
# Using variables and different data types
name = "AdamsGeeky"
age = 23
height = 20.75
is_student = True
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)
```


#Operators in Python and Their Usage

## Arithmetic Operators

1. **+ (Addition)**: Adds two operands.
2. **- (Subtraction)**: Subtracts the right operand from the left operand.
3. **\* (Multiplication)**: Multiplies two operands.
4. **/ (Division)**: Divides the left operand by the right operand, yielding a float.
5. **// (Floor Division)**: Divides the left operand by the right operand and truncates the decimal part.
6. **% (Modulus)**: Returns the remainder of the division between the left operand and the right operand.
7. **\*\* (Exponentiation)**: Raises the left operand to the power of the right operand.

```python
# Example of Arithmetic Operators
a = 10
b = 3

add_result = a + b
sub_result = a - b
mul_result = a * b
div_result = a / b
floor_div_result = a // b
modulus_result = a % b
exponentiation_result = a ** b

print(add_result, sub_result, mul_result)
print(div_result, floor_div_result, modulus_result)
print(exponentiation_result)
```



## Comparison Operators
== (Equal to): Returns True if both operands are equal.
!= (Not equal to): Returns True if operands are not equal.
< (Less than): Returns True if the left operand is less than the right operand.
> (Greater than): Returns True if the left operand is greater than the right operand.
<= (Less than or equal to): Returns True if the left operand is less than or equal to the right operand.
>= (Greater than or equal to): Returns True if the left operand is greater than or equal to the right operand.

# Example of Comparison Operators
```python

x = 5
y = 8

equal_result = x == y
not_equal_result = x != y
less_than_result = x < y
greater_than_result = x > y
less_than_equal_result = x <= y
greater_than_equal_result = x >= y

print(equal_result, not_equal_result)
print(less_than_result, greater_than_result)
print(less_than_equal_result, greater_than_equal_result)
```

## Logical Operators
and (Logical AND): Returns True if both operands are True.
or (Logical OR): Returns True if at least one operand is True.
not (Logical NOT): Returns True if the operand is False, and vice versa.

```python
# Example of Logical Operators
p = True
q = False

and_result = p and q
or_result = p or q
not_result = not p

print(and_result, or_result, not_result)
```

##  Assignment Operators
= (Assignment): Assigns the value of the right operand to the left operand.
+= (Add and Assign): Adds the right operand to the left operand and assigns the result to the left operand.
-= (Subtract and Assign): Subtracts the right operand from the left operand and assigns the result to the left operand.
*= (Multiply and Assign): Multiplies the left operand by the right operand and assigns the result to the left operand.

```python
# Example of Assignment Operators
num = 10
num += 5  # Equivalent to num = num + 5
num -= 3  # Equivalent to num = num - 3
num *= 2  # Equivalent to num = num * 2

print(num)
```

# program examples



## Creating Functional Code with Syntax and Keywords:

```python
# Checking if a number is even or odd using modulo operator (%)
number = int(input("Enter a number: "))

if number % 2 == 0:
    print(number, "is even.")
else:
    print(number, "is odd.")
```

## Using Variables and Data Types to Solve a Problem:

```python
# Calculating the area of a rectangle using variables and arithmetic operations
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

area = length * width
print("The area of the rectangle is:", area)
```

# Decision Moments with Conditional Statements

Imagine standing at a crossroads, deciding which path to take. That's what conditional statements do for your code – they make decisions. Just as you make choices based on certain conditions, conditional statements guide your code's path based on specified criteria.

**Conditional statements** are a fundamental concept in programming that allow your code to make decisions and take different paths based on specific conditions. 

Just like when you stand at a crossroads and decide which path to take based on factors like weather or destination, conditional statements enable your code to make choices depending on certain criteria.

## Purpose of Conditional Statements:

Conditional statements serve the purpose of controlling the flow of your code. They allow you to execute different blocks of code based on whether certain conditions are **true** or **false**. This enables your program to handle various scenarios and adapt its behavior accordingly.

## Types of Conditional Statements:

There are several types of conditional statements commonly used in programming:

a. The **"if"** Statement:
The simplest form of a conditional statement is the "if" statement. It evaluates a condition and, if the condition is true, executes a specified block of code.

```python
temperature = 25

if temperature > 30:
    print("It's hot outside!")
```

In this example, the code inside the "if" block will only run if the temperature is greater than 30.

b. The **"if-else"** Statement:
The "if-else" statement extends the "if" statement by providing an alternative block of code to execute if the condition is false.

```python
temperature = 20

if temperature > 30:
    print("It's hot outside!")
else:
    print("It's not that hot.")
```
Here, if the temperature is not greater than 30, the code inside the "else" block will be executed.

## Example: Greeting Based on Time

```python
current_time = int(input("Enter the current time (24-hour format): "))

if current_time < 12:
    print("Good morning!")
else:
    print("Good afternoon!")
```

c. The **"if-elif-else"** Statement:
When you have multiple conditions to evaluate, you can use the "if-elif-else" statement. This allows you to check different conditions in sequence and execute the corresponding block of code for the first condition that is true.

```python
temperature = 15

if temperature > 30:
    print("It's hot outside!")
elif temperature > 20:
    print("It's warm outside.")
else:
    print("It's cool outside.")
```
In this example, the code will check each condition in order and execute the block associated with the first condition that is true.

>Remember, 
**conditional statements** are essential tools for decision-making in programming, allowing your code to be more versatile and responsive to different situations.

# Code examples           

Story: You're organizing a weekend hangout with friends. If it's sunny, you'll go for a picnic; if it's rainy, you'll opt for indoor games.

## Code Example

```python
weather = input("Is it sunny or rainy? ")

if weather == "sunny":
    print("Let's go for a picnic!")
else:
    print("Indoor games it is!")
```

## Combining Syntax and Keywords for Logical Operations:

```python

# Using logical operators to check if a person is eligible to vote
age = int(input("Enter your age: "))
citizenship = input("Are you a citizen? (yes/no): ").lower()

if age >= 18 and citizenship == "yes":
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
```


# Loops:

Loops are another essential concept in programming that allow you to execute a block of code repeatedly. Just as you might perform a repetitive task multiple times, loops enable your code to automate such tasks by iterating over a sequence of values or elements.

## Purpose of Loops:

Loops serve the purpose of reducing code duplication and improving efficiency. They allow you to perform the same set of operations multiple times without writing the same code over and over again. Loops are especially useful when you need to process elements in a collection or perform a task a specific number of times.

### Types of Loops:

There are two primary types of loops commonly used in programming:

a. The "for" Loop:
The "for" loop iterates over a sequence of values, such as a list, range of numbers, or any iterable object. It executes a specified block of code for each element in the sequence.

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print("I like", fruit)
```

In this example, the code inside the "for" loop will run for each fruit in the list.

b. The "while" Loop:
The "while" loop continues to execute a block of code as long as a specified condition is true. It's used when the number of iterations is not known beforehand.

```python
count = 0

while count < 5:
    print("Count:", count)
    count += 1
```

Here, the code inside the "while" loop will execute as long as count is less than 5.

## Code Example:

Here's a complete example demonstrating the use of loops in Python:

```python
# Imagine a simple countdown program
countdown = 5

print("Starting countdown...")
while countdown > 0:
    print(countdown)
    countdown -= 1

print("Blastoff!")

for number in range(3):
    print("Hello, number", number)

fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print("I like", fruit)

print("Done with loops!")
```

In this example, the output will showcase the behavior of both **"while"** and **"for"** loops. 
The "while" loop counts down from 5 to 1, while the "for" loop iterates over a range of numbers and a list of fruits.

Loops enable you to automate repetitive tasks efficiently and process collections of data with ease, making your code more versatile and effective.


# Real-World Example: User Authentication

Consider a **user authentication system** where users need to provide a username and password to access a secure system. You want to create a program that prompts the user for their credentials and grants access if they're correct, with a limited number of attempts.

```python
# Define the maximum number of allowed attempts
MAX_ATTEMPTS = 3

# Define the correct username and password
correct_username = "user123"
correct_password = "password123"

# Initialize the attempts counter
attempts = 0

# Start a loop that runs as long as attempts are below the maximum
while attempts < MAX_ATTEMPTS:
    # Prompt the user for their username and password
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check if the entered credentials are correct
    if username == correct_username and password == correct_password:
        print("Access granted. Welcome!")
        break  # Exit the loop if access is granted
    else:
        print("Access denied. Please try again.")
        attempts += 1  # Increment the attempts counter

# Check if the maximum attempts have been reached
if attempts == MAX_ATTEMPTS:
    print("Maximum attempts reached. Access blocked.")
```

# Real-World Example: Grade Calculator

Suppose you're developing a grade calculator for a school. You want to input student scores and calculate their final grades based on certain criteria.
```python
def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

def process_student_scores():
    num_students = int(input("Enter the number of students: "))
    student_scores = {}

    for i in range(num_students):
        name = input(f"Enter name of student {i+1}: ")
        score = int(input("Enter student's score: "))
        grade = calculate_grade(score)
        student_scores[name] = grade

    print("Student Grades:")
    for name, grade in student_scores.items():
        print(name, ":", grade)

process_student_scores()
```

These examples showcase how you can use Python's syntax, keywords, variables, and data types to create functional and meaningful code. By understanding how these elements work together, you'll be well on your way to crafting powerful programs that achieve your desired outcomes.