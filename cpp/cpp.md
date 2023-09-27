---
title: C++ exercises
---

## Variables and operations

1. Create two variables `a` and `b` of type `int`. Swap the values of the two variables with and without using additional variables.

2. Ask the user for two integers `a` and `b`. Check if `a` is greater than `b`.

3. Ask the user for two integers (divisor and dividend). Compute the quotient and the remainder.

4. Ask the user for a character. Print the corresponding ASCII value.

5. Ask the user for two integers. Perform a bitwise `and`/`or`/`xor` operation and print the result.
   
   Tip: you can use `bitset` to print integers in binary form:
   
   ```cpp
   #include <bitset>
   ...
   char a = 10;
   std::bitset<8> x(a); //8 is the number of bits printed
   std::cout << x << '\n';
   // OUTPUT: 00001010
   ```

6. Ask the user for an integer. Perform a bitwise `not` operation. What is the output number? Why is it exactly that?

## Decisions and loops

1. Ask the user for an integer. Check if the integer is even or odd.

2. Ask the user for a character. Check if the character is a wovel or consonant (note: does it work for uppercase and lowercase characters?).

3. Given three numbers, check which one is larger.

4. All years which are perfectly divisible by 4 are leap years except for century years (years ending with 00), which are leap years only if they are perfectly divisible by 400. Ask the user for a year and check if it is a leap year.

5. Ask the user a positive integer (suppose user entered `n`). Compute the sum 1+2+3+....+n ($\sum_{i=1}^{n} i$).

6. The factorial of a number is the product of all the integers from 1 up to that number. Ask the user a positive integer (suppose user entered `n`). Compute the factorial 1\*2\*3\*....\*n.

7. Ask the user a positive integer. Write the multiplication table up to 10 of that number. Check the example below:
   
   ```
   > Enter a positive integer: 5
   5 * 1 = 5
   5 * 2 = 10
   5 * 3 = 15
   ...
   5 * 9 = 45
   5 * 10 = 50
   ```

8. Ask the user a positive integer and check if the number is prime.

9. Ask the user a positive integer and prints to the terminal its binary representation - without using bitset ;).

## Functions, pointers and references

1. A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
   
   Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
   
   ```cpp
   should_serve_drinks(17, true) ➞ false
   
   should_serve_drinks(19, false) ➞ true
   
   should_serve_drinks(30, true) ➞ false
   ```

2. Create a function that calculates the chance of being an imposter in an Among Us game. The formula for the chances of being an imposter is 
   
   $$
   ඞ(i, p)=100*(\frac{i}{p})
   $$
   
   where `i` is the imposter count and `p` is the player count.

3. Create two integer variables in the main. Write a function that takes as input the references to these two integers and swaps their values. If you now print the original variables in the main, are they swapped