def add_nums():
    num1 = 10
    num2 = 20
    return num1 + num2

print(add_nums)
print(add_nums())


def add_nums2(num1, num2):
    return num1 + num2

print(add_nums2(50,100))



print(list(map(lambda x: x**2, [1, 2, 3, 4, 5])))

def total_positive(a_list):
    total = 0
    for num in a_list:
        if num > 0:
            total += num
    print(total)


print(total_positive([2, 4, -23, 23, -4, 12]))


list1 = [1, 2, 3]
list2 = [4, 5, 6]

list3 = list1 + list2
print(list3)


fruits = ['orange', 'apple', 'banana', 'pear']
print('mango' in fruits)

print('-'.join(fruits))


print(fruits[1:3])

fruits.insert(2, 'stawberry')

print(fruits)